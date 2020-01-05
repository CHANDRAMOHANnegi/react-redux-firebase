import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import {
    FormControl,
    Container, Button, TextField,
    Typography, Paper
} from '@material-ui/core';
import { withStyles } from "@material-ui/styles";
// import { myFirebase } from '../firebase';
import styles from '../Style'

class Register extends Component {
    state = {
        name: "",
        email: '',
        password: '',
        error: null,
    };
    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password,name } = this.state;
        this.props.registerUser(name,email, password);
    };
    render() {
        const { classes, loginError, isAuthenticated } = this.props;
        const { name, email, password } = this.state;

        return (
            <Paper className={classes.paper}>
                <Typography component="h1" variant="h5">Register </Typography>
                <FormControl style={{width:"400px"}}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        value={name}
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        onChange={this.handleInputChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        value={email}
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        onChange={this.handleInputChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        value={password}
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        onChange={this.handleInputChange}
                    />
                    {loginError && (
                        <Typography component="p" className={classes.errorText}>
                            Incorrect email or password.
                             </Typography>
                    )}
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={this.handleSubmit}>
                        Register</Button>
                </FormControl>
            </Paper>
        );
    }
}

export default withStyles(styles)(withRouter(Register));
