import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import { Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItem';

const styles = {
    Paper: {
        padding: 20, marginTop: 10, marginBottom: 20, height: 500, ovrerflow: 'auto'
    },
    nested: {
        backgroundColor: 'grey',
        paddingLeft: 10
    }
}

export default ({
    exercises,
    category,
    onSelect,
    exercise: {
        id,
        title='Welcome!',
        description='Please select an exercise from the list on the left'
    }
}) =>
    <Grid container>
        <Grid item sm>
            <Paper style={styles.Paper}>
                {exercises.map(([group, exercises]) =>
                    !(category) || category === group
                        ? <Fragment key={group}>
                            <Typography variant="h4" style={{ textTransform: 'capitalize' }}>
                                {group}
                            </Typography>
                            <List component="ul">
                                {exercises.map(({ title, id }) =>
                                    <ListItem key ={id} button onClick={() => onSelect(id)}>
                                        {title}
                                    </ListItem>
                                )}
                            </List>
                        </Fragment>
                        : null
                )}

            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={styles.Paper}>
                <Fragment>
                    <Typography variant="h4">{title} </Typography> 
                    <Typography variant="subtitle1" style={{ marginTop: 20 }} >  {description}</Typography>
                
                </Fragment>
            </ Paper>
        </Grid>
    </Grid>