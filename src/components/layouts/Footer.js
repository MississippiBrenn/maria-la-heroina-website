
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


 export default ({ matchTo, category, onSelect }) => {
   const index = category
   ? matchTo.findIndex(group => group == category)+1
   : 0 

  const onIndexSelect = (e, index) =>
    onSelect(index === 0 ? '': matchTo[index-1]) 
   return  <Paper>
      <Tabs
        value={index}  
        onChange={onIndexSelect}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        {matchTo.map(group => 
        <Tab key={group} label={group} />
          )}
    
      </Tabs>
    </Paper>
 }