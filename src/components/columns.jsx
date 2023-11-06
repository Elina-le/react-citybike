import {createColumnHelper} from '@tanstack/react-table'

const columnHelper = createColumnHelper();

export const columns = [

    columnHelper.accessor('departureStationName', {
        header: 'Departure Station',
    }),
    columnHelper.accessor('returnStationName', {
        header: 'Return Station',
    }),
    columnHelper.accessor('kilometers', {
        header: 'Covered Distance km',
    }),
    columnHelper.accessor('minutes', {
        header: 'Duration',
    }),
]
