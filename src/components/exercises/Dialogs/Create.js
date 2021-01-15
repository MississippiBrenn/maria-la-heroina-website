import React from 'react';
import Component from 'react'
import Fragment from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import AddIcon  from '@material-ui/icons/Add'


export default class extends React.Component {
    state = {
        open: false
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        const { open } = this.state
        return <div>
            <Button variant="fab" onClick={this.handleToggle}>
                <AddIcon></AddIcon>
                 
            </Button>
            <Dialog 
                open={open} 
                onClose={this.handleToggle} 
                aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">
                CREATE A NEW Exercise
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please fill out the form below
                </DialogContentText>
            </DialogContent>
            <form>

            </form>
            <DialogActions>
                <Button color="primary" variant="raised">
                    Subscribe
                </Button>
            </DialogActions>
        </Dialog>
        </div>;
    }
}