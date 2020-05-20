import React from 'react'
import axios from 'axios';
import { useTable } from 'react-table'

export default function Table({users}) {

    const data = React.useMemo(
        () => [
            {
                col1: 'Hello',
                col2: 'World',
            },
            {
                col1: 'react-table',
                col2: 'rocks',
            },
            {
                col1: 'whatever',
                col2: 'you want',
            },
        ],
        []
    )

    const columns = React.useMemo(
        () => [
            {
                Header: 'First Name',
                accessor: 'col1', // accessor is the "key" in the data
            },
            {
                Header: 'Last Name',
                accessor: 'col2',
            },
            {
                Header: 'Email',
                accessor: 'col3',
            },
        ],
        []
    )

    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })

    // Render the UI for your table
    return (
        <div>
            <table {...getTableProps()}>
                {users}
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

// export async function getInitialProps() {
//
//     //@TODO data from axios doesn't available
//
//     const res = await axios.get(`http://${process.env.HOSTNAME}:${process.env.PORT}/api/user/`);
//     const users = await res.data
//     return {
//         props: {
//             users
//         },
//     }
// }
