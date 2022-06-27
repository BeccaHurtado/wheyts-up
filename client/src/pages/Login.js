import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
// import Login from '/pages'
import Auth from '../utils/auth';

import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  Paper,
  Grid,
  Typography
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
    <Paper bgcolor="background.paper" align="center" sx={{ height: 800 }}>
      <form className="Form" onSubmit={handleFormSubmit}>
        <br></br>
        <br></br>

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

        <br></br>

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

        <br></br>

        <Button variant="outlined" type='submit'>Submit</Button>
      </form>
    </Paper>
  );
};

export default Login;
