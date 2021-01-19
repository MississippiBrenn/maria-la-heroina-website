import React from 'react';

export const GlobalFilter = ({filter, setFilter}) => {
    return(<div>
        <span>
            Search table using numbers only (ie 15993){' '}
            <input value = {filter || ''}
            onChange={(e) => setFilter(e.target.value)} />
        </span>
    </div>)
}

// this will only work if data is loaded on client side, once we move off csvs will eed to chnage