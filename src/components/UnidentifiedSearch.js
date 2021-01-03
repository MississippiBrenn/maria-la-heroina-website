import React, { useState } from "react";
import TableToReturn from './TableToReturn'

function UnidentifiedSearch() {
    const [searchButtonClicked, setSearchButtonClicked] = useState(false)

    function handleClick(e){
        e.preventDefault();
        setSearchButtonClicked(!searchButtonClicked)

    }
    return (
        <div>UnidentfiedSeachMenu
            <form className='searchCriteria'>
                <p>{`${searchButtonClicked}`}</p>
                {searchButtonClicked && <TableToReturn />}
                <button onClick={handleClick}>Search</button>
            </form>
        </div>
    );
}
export default UnidentifiedSearch;