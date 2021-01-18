import { useEffect, useState } from 'react';
import { csv } from 'd3';
import datacsv from '../../csvs/uid_possible_matches_10_miles_with_race.csv';
import Table from "rc-table";
import '../../css/TableToReturn.css';


function TableToReturn2(props) {
    const [data, setData] = useState([]);
    useEffect(() => {
        csv(datacsv).then(setData);
    }, []);

  
        const columns = [
            {
                title: "Namus Case",
                dataIndex: "case",
                key: "case",

            },
            {
                title: "Possible Matches",
                dataIndex: "possible_matches",
                key: "possible_matches",
                
            },
       
        ];
    
    return (
        <div>
             <Table 
                columns={columns}
                data={data}
                tableLayout="auto" />

        </div>
    );
    }


export default TableToReturn2;