import React from 'react'; 
import Grid from '@material-ui/core/Grid';
import LeftPane from './LeftPane';
import RightPane from './RightPane';

const styles = {
    Paper: {
        padding:20, marginTop:10, marginBottom: 20
    }
}

export default props =>
<Grid  container>
    <Grid item sm>
         <LeftPane styles={styles}></LeftPane>
    </Grid>
    <Grid item sm>
         <RightPane styles={styles}></RightPane>
         
    </Grid>
</Grid>