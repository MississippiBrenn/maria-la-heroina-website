import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import '../../css/basicTable.css';

const dataHardCoded  = [{case: "https://www.namus.gov/UnidentifiedPersons/Case#/72584?nav", possible_matches: "['https://www.namus.gov/MissingPersons/Case#/69069?nav']"},
{case: "https://www.namus.gov/UnidentifiedPersons/Case#/16996?nav", possible_matches: "['https://www.namus.gov/MissingPersons/Case#/71317?nav']"}
,{case: "https://www.namus.gov/UnidentifiedPersons/Case#/52799?nav", possible_matches: "['https://www.namus.gov/MissingPersons/Case#/16169…://www.namus.gov/MissingPersons/Case#/15992?nav']"}]

const COLUMNS = [
  {
  Header: 'NAMUS case',  
  accessor:'case', 
   
}, 
{
  Header: 'Possible Matches',
  accessor: 'possible_matches'
},
]

export const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => dataHardCoded, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  })

  return (
    <>
      <table {...getTableProps()}>
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
        <tfoot>
          {footerGroups.map(footerGroup => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map(column => (
                <td {...column.getFooterProps()}>{column.render('Footer')}</td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </>
  )
}

export default BasicTable;
