import React, {useState, useEffect, useMemo} from "react";
import { useErrorBoundary } from 'react-error-boundary'
import JourneyService from "../../services/journeys";
import Loading from '../Loading';
//Tanstack Table:
import {
    useReactTable,
    flexRender,
    getCoreRowModel
  } from '@tanstack/react-table'
import { columns } from './columns';


const JourneyList = () => {

  const [journeyData, setJourneyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  
  const { showBoundary } = useErrorBoundary();

  //------------GET DATA------------//
  const getJourneyData = (newIndex) => {
    JourneyService.getPaginatedJourneys(newIndex, 100).then(
      data => {
        console.log(data)
        setJourneyData(data.responseData)
        console.log(data.responseData)
        setTotalPages(data.totalPageCount)
        setLoading(false);
      }
    ).catch (error => {
      console.log("Tämä on error journeysListin datan haku pyynnöstä: " + error)
      showBoundary(error)
    });
  };

  useEffect(() => {
    getJourneyData(0)
  },[]);

  //-----------PAGINATION-----------//
  const [{ pageIndex, pageSize }, setPagination] =
  useState({
    pageIndex: 0,
    pageSize: 10,
  })

  const defaultData = useMemo(() => [], [])

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  )

  //--------TABLE INSTANCE---------//
  const table = useReactTable({
    data: journeyData ?? defaultData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    pageCount: totalPages ?? -1,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    manualPagination: true,
    debugTable: true
  })

  return (
    <>
      <h1>Journeys</h1>
      { loading ? <Loading /> : 
        <table className="table">
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext())
                    }
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>
                    {flexRender(
                      cell.column.columnDef.cell, 
                      cell.getContext()
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      }
      {/* -----------------------FIRST PAGE-------------------------- */}
      <button
        className="border rounded p-1"
        onClick={() => {
          getJourneyData(0);
          table.setPageIndex(0);
        }}
        disabled={!table.getCanPreviousPage()}>
        {'<<'}
      </button>

      {/* -----------------------PREVIOUS PAGE----------------------- */}
      <button
        className="border rounded p-1"
        onClick={() => {
          table.previousPage();
          getJourneyData(table.getState().pagination.pageIndex - 1);
        }}
        disabled={!table.getCanPreviousPage()}>
        {'<'}
      </button>

      {/* ------------------------NEXT PAGE-------------------------- */}
      <button
        className="border rounded p-1"
        onClick={() => {
          table.nextPage();
          getJourneyData(table.getState().pagination.pageIndex + 1);
        }}
        disabled={!table.getCanNextPage()}>
        {'>'}
      </button>

      {/* ------------------------LAST PAGE-------------------------- */}
      <button
        className="border rounded p-1"
        onClick={() => {
          getJourneyData(table.getPageCount() - 1);
          table.setPageIndex(table.getPageCount() - 1);
        }}
        disabled={!table.getCanNextPage()}>
        {'>>'}
      </button>

      {/* ----------------------PAGE NUMBER LABEL-------------------- */}
      <span className="flex items-center gap-1">
        <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </strong>
      </span>

      {/* ---------------------GO TO PAGE INPUT---------------------- */}
      <span className="flex items-center gap-1">
        Go to page:
        <input
          type="number"
          defaultValue={table.getState().pagination.pageIndex + 1}
          onChange={e => {
            const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
            table.setPageIndex(pageNumber)
            getJourneyData(pageNumber);
          }}
          className="border p-1 rounded w-16"
        />
      </span> 
    
    </>
  )
}

export default JourneyList;