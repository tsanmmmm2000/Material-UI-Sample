import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

const initialState = {
    contact: {
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
        console.log(this.state.contact);
    };

    handleChange(event) {
        const contact = this.state.contact;
        contact[event.target.name] = event.target.value;
        this.setState({ contact : contact });
    }

    render() {
        return(
            <React.Fragment>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            name="firstName"
                            value={this.state.contact.firstName}
                            label="First name"
                            onChange={this.handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            name="lastName"
                            value={this.state.contact.lastName}
                            label="Last name"
                            onChange={this.handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            name="address"
                            value={this.state.contact.address}
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