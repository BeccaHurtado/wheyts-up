// import React from 'react';
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';

import Auth from '../utils/auth';

import { FormControl, Button, TextField, } from '@mui/material';

const Login = (props) => {

    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
        console.log("handle change")
    };

    // check credentials on submit
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);
        } catch (err) {
            console.error(err);
        }

        // clear form values
        setFormState({
            email: '',
            password: '',
        });
    };

    return (
        <FormControl className='Form' onSubmit={handleFormSubmit}>


            <TextField
                id="email"
                label="Email"
                value={formState.email} //formState.email
                onChange={handleChange}
            />

            <br></br>

            <TextField
                id="password"
                label="Password"
                value={formState.password} //formState.password
                onChange={handleChange}
            />

            <br></br>

            <Button variant="outlined" >Submit</Button>
            {error && <div>Login failed</div>}
        </FormControl>

    );
};

export default Login;