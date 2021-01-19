import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CreateDialog from '../exercises/Dialogs/Create';


export default props =>
<AppBar position="static">
    <Toolbar>
      <Typography variant="h4" color="inherit" style={{flex: 1}} gutterBottom>
        Maria LaHeroina
      </Typography>
      <Typography variant="h6" color="inherit" style={{flex: 1}} gutterBottom>
      Maria is a tool for matching missing and unidentified women in the National Missing and Unidentified Persons System(NAMUS).
      </Typography>
      </Toolbar>
      {/* <CreateDialog></CreateDialog> */}
</AppBar>