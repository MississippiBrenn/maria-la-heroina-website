import React from 'react';

import Table1 from './Table1';
import Table2 from './Table2';

function TableWrapper(props) {
    const title = props.title
        return (
        <div className="container">
            {(() => {

                switch (title) {
                    case 'Unidentified with race within 10 miles':
                        return (
                            <Table1/>
                        )
                    case 'Unidentified without race within 10 miles':
                        return (
                            <Table2 />
                        )
                    default:
                        return (
                            <div></div>
                        )
                }

            })()}

        </div>
    
    )}
    
export default TableWrapper;
