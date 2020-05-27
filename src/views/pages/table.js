import React, {useState} from 'react';
import axios from 'axios';
import ReactTable, { useTable, usePagination } from 'react-table'
import app from './../../configs/app.config';

// const data = React.useMemo(
//     () => [
//         {
//             col1: 'Hello',
//             col2: 'World',
//         },
//         {
//             col1: 'react-table',
//             col2: 'rocks',
//         },
//         {
//             col1: 'whatever',
//             col2: 'you want',
//         },
//     ],
//     []
// )


export default function Table({users}) {
    console.log(users)

    const columns = React.useMemo(
        () => [
            {
                Header: 'Last Name',
                accessor: 'lastName', // accessor is the "key" in the data
            },
            {
                Header: 'First Name',
                accessor: 'firstName', // accessor is the "key" in the data
            },

            {
                Header: 'Email',
                accessor: 'email', // accessor is the "key" in the data
            },
            {
                Header: 'Position',
                accessor: 'position', // accessor is the "key" in the data
            },
            {
                Header: 'Salary',
                accessor: 'salary', // accessor is the "key" in the data
            },
            {
                Header: 'BirthDay',
                accessor: 'birthDay', // accessor is the "key" in the data
            },
            {
                Header: 'Employer',
                accessor: 'isEmployer', // accessor is the "key" in the data
                // Cell: ({ row, original }) => {
                //     return (isEmployer)
                // }
            },
            {
                Header: 'Action',
                accessor: 'action', // accessor is the "key" in the data
                Cell: ({ row, original }) => {
                    return 0
                }

            },
        ],
        []
    )


    const data = React.useMemo(
        () => [
            ...users
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        rows,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
    } = useTable(
        {columns,
            data,
            initialState: { pageIndex: 0 }, // Pass our hoisted table state
            manualPagination: true, // Tell the usePagination
            // hook that we'll handle our own data fetching
            // This means we'll also have to provide our own
            // pageCount.
            pageCount: 5
        },
        usePagination
    )

    console.log(prepareRow)
    return (
        <>
            <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th
                                {...column.getHeaderProps()}
                                style={{
                                    borderBottom: 'solid 3px red',
                                    background: 'aliceblue',
                                    color: 'black',
                                    fontWeight: 'bold',
                                }}
                            >
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                    <td
                                        {...cell.getCellProps()}
                                        style={{
                                            padding: '10px',
                                            border: 'solid 1px gray',
                                            background: 'papayawhip',
                                        }}
                                    >
                                        {cell.render('Cell')}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    )
}








