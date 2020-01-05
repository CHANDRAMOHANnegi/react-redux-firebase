import React, { Component } from 'react';
import { withRouter,Redirect } from 'react-router-dom';
import {
    Container, Button, Avatar, TextField, Typography, Paper
} from '@material-ui/core';
import styles from '../Style';
import { withStyles } from "@material-ui/styles";

class Login extends Component {
    state = {
        email: '',
        password: '',
        error: null,
    };
    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = () => {
        const { email, password } = this.state;
        // console.log(" email, password",{ email, password});
        this.props.loginUser(email, password);
    };

    render() {
        const { classes, loginError, isAuthenticated } = this.props;
        console.log("login component------->>>>",isAuthenticated);
        const { email, password } = this.state;
            return (
                <Container component="main" maxWidth="xs">
                    <Paper className={classes.paper}>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
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
                            Sign In
                        </Button>
                    </Paper>
                </Container>
            );
        }
    }

 


export default withStyles(styles)(withRouter(Login));