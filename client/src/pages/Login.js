import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import './login.css'
import Auth from '../utils/auth';

import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  Paper,
  Grid,
  Typography,
  Box
} from "@mui/material";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login] = useMutation(LOGIN)

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
   
      const mutationResponse = await login({
        variables: {
          email: formState.email,
          password: formState.password,
        },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);

      console.log(token);
    } 

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  ;

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
            Please enter your Password above.
          </FormHelperText>
       </FormControl>
        <Button variant="outlined" type='submit' className="submit-button">Submit</Button>
      </form>
    </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
