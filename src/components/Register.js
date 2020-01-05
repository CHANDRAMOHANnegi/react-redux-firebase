import React, { Component } from 'react';
import { withRouter,Redirect } from 'react-router-dom';
import {
    Container, Button, TextField,
      Typography, Paper
} from '@material-ui/core';
import { withStyles } from "@material-ui/styles";
// import { myFirebase } from '../firebase';
import styles from '../Style'

class Register extends Component {
    state = {
        email: '',
        password: '',
        error: null,
    };
    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        this.props.registerUser(email, password);
    };
    render() {
        const { classes, loginError, isAuthenticated } = this.props;
        const { email, password } = this.state;
       
            return (
                <Container component="main" maxWidth="xs">
                    <Paper className={classes.paper}>
                        <Typography component="h1" variant="h5">
                        Register
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
                            onClick={this.handleSubmit}
                        >
                            Register
            </Button>
                    </Paper>
                </Container>
            );
        }
}

export default withStyles(styles)(withRouter(Register));
