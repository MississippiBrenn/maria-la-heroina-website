import React, { useState } from "react";
import TableToReturn from './TableToReturn'
import { Select, InputLabel, MenuItem, FormControl } from '@material-ui/core';


function UnidentifiedSearch() {
    const [race, setRace] = useState("");
    function handleRaceChange(e) {
        e.preventDefault();
        setRace(e.target.value)

    }



    const [searchButtonClicked, setSearchButtonClicked] = useState(false)
    function handleClick(e) {
        e.preventDefault();
        setSearchButtonClicked(!searchButtonClicked)

    }
    return (
        <div>
            <FormControl >
                <InputLabel id="race">Match on Race</InputLabel>
                <Select onChange={handleRaceChange} labelId="race" id="select">
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                </Select>
                <InputLabel id="radius">Distance between cases</InputLabel>
                <Select labelId="radius" id="select" value="20">
                    <MenuItem value="10">Less than 10 Miles</MenuItem>
                    <MenuItem value="50">Less than 50 Miles</MenuItem>
                    <MenuItem value="100">Less than 100 Miles</MenuItem>
                    <MenuItem value="-100">Leave this out of my search</MenuItem>
                </Select>
                
            </FormControl>
            <p>{`${race}`}</p>
            <p>{`${searchButtonClicked}`}</p>
                {searchButtonClicked && <TableToReturn />}
                <button onClick={handleClick}>Search</button>

            


        </div>
    );
}
export default UnidentifiedSearch;