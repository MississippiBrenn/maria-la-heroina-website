import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
export default props =>
<AppBar position="static">
    <Toolbar><Typography variant="h4" color="inherit" gutterBottom>
        Matches
      </Typography></Toolbar>
</AppBar>