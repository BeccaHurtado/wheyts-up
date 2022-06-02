import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";

import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
} from "@mui/material";

const signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
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

    // use try/catch instead of promises
    try {
      // execute addUser mutation and pass in variable data
      const { data } = await addUser({
        variables: { ...formState },
      });
      Auth.login(data.addUser.token);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <FormControl className="Form" onSubmit={handleFormSubmit}>
      <FormControl>
        <InputLabel htmlFor="my-input">Username</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" value={formState.username}
                onChange={handleChange}/>
        <FormHelperText id="my-helper-text">
          Please enter your username above.
        </FormHelperText>
      </FormControl>

      <br></br>

      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" value={formState.email}
                onChange={handleChange}/>
        <FormHelperText id="my-helper-text">
          Please enter your email above.
        </FormHelperText>
      </FormControl>

      <br></br>

      <FormControl>
        <InputLabel htmlFor="my-input">Password</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" value={formState.password}
                onChange={handleChange}/>
        <FormHelperText id="my-helper-text">
          Enter a password at least 8 characters long.
        </FormHelperText>
      </FormControl>

      <br></br>

      <Button variant="outlined" type="submit">Submit</Button>
      {error && <div>Sign up failed</div>}
    </FormControl>
  );
};

export default signup;
