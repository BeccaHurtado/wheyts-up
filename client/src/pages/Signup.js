import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button, Paper,
  Grid, Box
} from "@mui/material";

const Signup = (props) => {

  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };
  return (

    <Grid container justifyContent="center" alignItems="center">
      <Grid item>
      <Box sx={{
      width: 800, 
      height: 800, 
      backgroundColor: 'dark', 
      '&:hover': {
      backgroundColor: 'black',
      opacity: [0.9, 0.8, 0.7]}}}>
      <form className="form" onSubmit={handleFormSubmit}>
      <FormControl>
          <InputLabel htmlFor="my-input">Username</InputLabel>
          <Input  
          aria-describedby="my-helper-text"
          type="username"
          name="username"
          value={formState.username}
          onChange={handleChange} 
          />
          <FormHelperText id="my-helper-text">
            Please enter your username above.
          </FormHelperText>
      </FormControl>

      <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input  
          aria-describedby="my-helper-text"
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange} 
          />
          <FormHelperText id="my-helper-text">
            Please enter your email above.
          </FormHelperText>
      </FormControl>

        <FormControl>
          <InputLabel htmlFor="my-input">Password</InputLabel>
          <Input 
          aria-describedby="my-helper-text"
          type="password"
          name="password"
          value={formState.password} 
          onChange={handleChange}
          />
          <FormHelperText>
            Password must have a minimum of 8 characters.
          </FormHelperText>
       </FormControl>
        <Button variant="outlined" type='submit' className="submit-button">Submit</Button>
        </form>
      </Box>
      </Grid>
    </Grid>

  );
};

export default Signup;
