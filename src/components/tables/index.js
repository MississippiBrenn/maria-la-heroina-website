import React from 'react';

import TableToReturn1 from './TableToReturn1';
import TableToReturn2 from './TableToReturn2';

function TableWrapper(props) {
    const title = props.title
        return (
        <div className="container">
            {(() => {

                switch (title) {
                    case 'Unidentified with race within 10 miles':
                        return (
                            <TableToReturn1 title={title} />
                        )
                    case 'Unidentified without race within 10 miles':
                        return (
                            <TableToReturn2 title={title}/>
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
