import { useEffect, useState } from 'react';
import { csv } from 'd3';
import datacsv from './csvs/uid_possible_matches_10_miles_with_race.csv';

// this is a test to see how we can pass the parsed cvs files up to a higher level component
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