import { Divider } from '@material-ui/core';
import React, { Component } from 'react';

export const GlobalFilter = ({filter, setFilter}) => {
    return(<div>
        <span>
            Search table using numbers only (ie 15993){' '}
            <input value = {filter || ''}
            onChange={(e) => setFilter(e.target.value)} />
        </span>
    </div>)
}