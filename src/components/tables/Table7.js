
import React, { useState, useEffect, useMemo } from 'react';
import { csv } from 'd3';
import { useTable, useGlobalFilter } from 'react-table';
import datacsv from '../../csvs/uid_possible_matches_all_with_out_race_part_2.csv';
import { COLUMNS } from './columns';
import '../../css/basicTable.css';

import { GlobalFilter } from './globalFilter'

function Table1() {

    const [data, setData] = useState([]);
    useEffect(() => {
        csv(datacsv).then(setData);
    }, []);

    // not creating new data on every render
    const columns = useMemo(() => COLUMNS, [])



    const { getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter } = useTable({
            columns,
            data
        }, useGlobalFilter)


    const { globalFilter } = state

    return (
        <>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (

                    <tr {...headerGroup.getHeaderGroupProps()}>

                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}> {}
                                {column.render('Header')}</th>
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
                                // console.log(cell)
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
            <tfoot>
                {footerGroups.map(footerGroup => (
                    <tr {...footerGroup.getFooterGroupProps()}>
                        {
                            footerGroup.headers.map(column => (
                                <td {...column.getFooterProps}>
                                    {
                                        column.render('Footer')
                                    }
                                </td>
                            ))
                        }
                    </tr>
                ))}
            </tfoot>
        </table>
        </>
    )
}

export default Table1; 