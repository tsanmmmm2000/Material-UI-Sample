import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

const initialState = {
    person: {
        firstName: "",
        lastName: "",
        address: ""
    }
}

export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit() {
        console.log(this.state.person);
    };

    handleChange(event) {
        const person = this.state.person;
        person[event.target.name] = event.target.value;
        this.setState({ person : person });
    }

    render() {
        return(
            <React.Fragment>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            name="firstName"
                            value={this.state.person.firstName}
                            label="First name"
                            onChange={this.handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            name="lastName"
                            value={this.state.person.lastName}
                            label="Last name"
                            onChange={this.handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            name="address"
                            value={this.state.person.address}
                            label="Address"
                            onChange={this.handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}></Grid>
                </Grid>
                <Button variant="contained" color="primary" onClick={this.handleSubmit}>Submit</Button>                     
            </React.Fragment>
        );       
    }
}