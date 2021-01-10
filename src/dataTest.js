import { useEffect, useState } from 'react';
import { csv } from 'd3';
import datacsv from './csvs/uid_possible_matches_10_miles_with_race.csv';

const DataTest = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        csv(datacsv).then(data => {
            setData(data);
        });
    }, []);
    
    console.log(data)

    return ( 
         <div>data={[]}</div>
    );

}


export default DataTest;