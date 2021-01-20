import React from 'react';

import Table1 from './Table1';
import Table2 from './Table2';
import Table4 from './Table4';
import Table5 from './Table5';
import TableBasic from './TableBasic';
import csv3 from '../../csvs/uid_possible_matches_50_miles_with_race.csv';




function TableWrapper(props) {
    const title = props.title
    return (
        <div className="container">
            {(() => {

                switch (title) {
                    case 'Unidentified with race within 10 miles':
                        return (
                            <Table1 />
                        )
                    case 'Unidentified without race within 10 miles':
                        return (
                            <Table2 />

                        )
                    case 'Unidentified with race within 50 miles':
                        return (
                            <TableBasic csvInput={csv3} />
                        )
                    case 'Unidentified without race within 50 miles':
                        return (
                            <Table4 />
                        )
                    case 'Unidentified with race all matches':
                        return (
                            <Table5 />
                            )
                    default:
                        return (
                            <div></div>
                        )
                }

            })()}

        </div>

    )
}

export default TableWrapper;
