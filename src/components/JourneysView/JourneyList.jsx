import React, {useState, useEffect, useMemo, useCallback} from "react";
import { useErrorBoundary } from 'react-error-boundary'
import JourneyService from "../../services/journeys";
import styles from './JourneyList.module.css';
import Loading from '../Loading';
import NextpageIcon from '../IconComponents/NextpageIcon';
import LastpageIcon from '../IconComponents/LastpageIcon';
import PreviouspageIcon from '../IconComponents/PreviouspageIcon';
import FirstpageIcon from '../IconComponents/FirstpageIcon';
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
  const [inputError, setInputError] = useState('');
  const { showBoundary } = useErrorBoundary();

  //------------GET DATA------------//
  const getJourneyData =  useCallback((newIndex) => {
    JourneyService.getPaginatedJourneys(newIndex, 15)
      .then(data => {
        setJourneyData(data.responseData)
        setTotalPages(data.totalPageCount)
        setLoading(false);
        }
      ).catch (error => {
        showBoundary(error)
      });
  }, [showBoundary]);
  
  useEffect(() => {
    getJourneyData(0)
  },[getJourneyData]);

  //-----------PAGINATION-----------//
  const [{ pageIndex, pageSize }, setPagination] =
  useState({
    pageIndex: 0,
    pageSize: 15,
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

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const pageNumber = inputValue ? Number(e.target.value) - 1 : 0
    console.log(pageNumber)
    if (pageNumber >= 0 && pageNumber <= table.getPageCount()) {
      setInputError('');
      table.setPageIndex(pageNumber)
      getJourneyData(pageNumber);
    }
    else {
      setInputError('Please enter a valid page number');
    }
  }

  return (
    <div className={styles.journeysSection}>
      <h1 className={styles.head}>Journeys</h1>
      { loading ? <Loading /> :
        <div className={styles.tableSection}>
          <div className={styles.tableContainer}>
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
          </div>
        </div>
      }

      {/* ------------------------PAGE NUMBER---------------------- */}
      <div className={styles.pageNumberContainer}>
          Page {' '}
          {table.getState().pagination.pageIndex + 1} /{' '}
          {table.getPageCount()}
      </div>

      <div className={styles.buttonContainer}>
        {/* -----------------------FIRST PAGE-------------------------- */}
        <button
          className={styles.buttonDarker}
          onClick={() => {
            getJourneyData(0);
            table.setPageIndex(0);
          }}
          disabled={!table.getCanPreviousPage()}>
          {<FirstpageIcon />}
        </button>

        {/* -----------------------PREVIOUS PAGE----------------------- */}
        <button
          className={styles.buttonLighter}
          onClick={() => {
            table.previousPage();
            getJourneyData(table.getState().pagination.pageIndex - 1);
          }}
          disabled={!table.getCanPreviousPage()}>
          {<PreviouspageIcon />}
        </button>

        {/* ------------------------NEXT PAGE-------------------------- */}
        <button
          className={styles.buttonLighter}
          onClick={() => {
            table.nextPage();
            getJourneyData(table.getState().pagination.pageIndex + 1);
          }}
          disabled={!table.getCanNextPage()}>
          {<NextpageIcon />}
        </button>

        {/* ------------------------LAST PAGE-------------------------- */}
        <button
          className={styles.buttonDarker}
          onClick={() => {
            getJourneyData(table.getPageCount() - 1);
            table.setPageIndex(table.getPageCount() - 1);
          }}
          disabled={!table.getCanNextPage()}>
          {<LastpageIcon />}
        </button>
      </div>

      {/* ---------------------------INPUT---------------------------- */}
        <input
          type="number"
          min="1"
          max={table.getPageCount()}
          name="pageNumber"
          placeholder="Go to page"
          onChange={handleInputChange}
          className={styles.input}
        />
        {inputError && <p style={{ color: 'red' }}>{inputError}</p>}
    </div>
  )
}

export default JourneyList;