import React, { useState, useEffect, useMemo } from 'react';
import { csv } from 'd3';
import { useTable } from 'react-table';
import datacsv from '../../csvs/uid_possible_matches_10_miles_with_race.csv';
import { COLUMNS } from './columns';
import '../../css/basicTable.css';

function BasicTable() {

    const [data, setData] = useState([]);
    useEffect(() => {
        csv(datacsv).then(setData);
    }, []);


    // not creating new data on every render
    const columns = useMemo(() => COLUMNS, [])    


    const tableInstance = useTable({
        columns,
        data
    })
    console.log(data)

    const { getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow } = tableInstance
    return (
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
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
        </table>
    )
}

export default BasicTable; 