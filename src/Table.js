import { useEffect, useState } from 'react';
import { csv } from 'd3';
import datacsv from './uid_possible_matches_10_miles_with_race';

function Table() {
    const [data, setData] = useState([]);
    useEffect(() => {
        csv(datacsv).then(setData);
    }, []);
    return (
        <div>
            Here is the table with all possible results

        </div>
    );

}

export default Table;