import { useEffect, useState } from 'react';
import { csv } from 'd3';
import datacsv from '../../csvs/uid_possible_matches_10_miles_with_race.csv';
import Table from "rc-table";
// import '../css/TableToReturn.css'


function TableToReturn() {
    const [data, setData] = useState([]);
    useEffect(() => {
        csv(datacsv).then(setData);
    }, []);

  
        const columns = [
            {
                title: "Unidentified Namus Case",
                dataIndex: "uid_case",
                key: "uid_case",
                width: 500,
                

            },
            {
                title: "Possible Matches",
                dataIndex: "possible_matches",
                key: "possible_matches",
                width:500,
            },
       
        ];
    
    return (
        <div>
            <h2>Matches within a 10 mile radius with race</h2>
        <Table
                columns={columns}
                data={data}
                tableLayout="auto" />

        </div>
    );

}

export default TableToReturn;