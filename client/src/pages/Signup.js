// import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';

// import Auth from '../utils/auth';

import { FormControl, InputLabel, Input, FormHelperText, Button } from '@mui/material';

const signup = (props) => {
    return (
        <FormControl className='Form'>
            <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">Please enter your username above.</FormHelperText>
            </FormControl>

            <br></br>

            <FormControl>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">Please enter your email above.</FormHelperText>
            </FormControl>

            <br></br>

            <FormControl>
                <InputLabel htmlFor="my-input">Password</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">Enter a password at least 8 characters long.</FormHelperText>
            </FormControl>

            <br></br>

            <Button variant="outlined">Submit</Button>
        </FormControl>

    );
}

export default signup;