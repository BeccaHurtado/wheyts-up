import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';

import Auth from '../utils/auth';

import { FormControl, Button, TextField, Box } from '@mui/material';

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
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            email: '',
            password: '',
        });
    };

    return (
        <Box>
            <FormControl className='Form'>
                <br></br>
                {/* <FormControl>
                <TextField
                    id="username-text"
                    label="Username"
                    value={username}
                    onChange={handleChange}
                />
            </FormControl>

            <br></br> */}

                <TextField
                    id="email-text"
                    label="Email"
                    value={formState.email}
                    onChange={handleChange}
                />

                <br></br>

                <TextField
                    id="password-text"
                    label="Password"
                    value={formState.password}
                    onChange={handleChange}
                />

                <br></br>

                <Button variant="outlined" onSubmit={handleFormSubmit}>Submit</Button>
            </FormControl>
            {error && <div>Login failed</div>}
        </Box>

    );
}

export default Login;