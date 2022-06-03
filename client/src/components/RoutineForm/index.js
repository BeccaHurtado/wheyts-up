import * as React from 'react';
import { useState } from 'react';
import { Box, Fab, TextField, Button, FormControl } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useMutation } from '@apollo/client';
import { ADD_ROUTINE } from '../../utils/mutations';

import Auth from "../../utils/auth";

const RoutineForm = () => {
    const [formState, setFormState] = useState({ name: '', type: '' });
    const [login, { error }] = useMutation(ADD_ROUTINE);

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

    const handleOpenForm = () => {
        return (
            <Box>
                <FormControl
                    label="Routine Form"
                >
                    <TextField
                        id="routineName"
                        label="Routine Name"
                        value={formState.name}
                        onChange={handleChange}
                    />
                    <TextField
                        id="workoutType"
                        label="Workout Type"
                        value={formState.type}
                        onChange={handleChange}
                    />
                    {/* <TextField
                    id="workoutType"
                    label="Workout Type"
                    value={type}
                    onChange={handleChange}
                />  add in exercises here?*/}
                    <Button variant="outlined" onSubmit={handleFormSubmit}>Submit</Button>
                </FormControl>
            </Box>
        )
    };

    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            {Auth.loggedIn() ? (
                <Fab color="primary" aria-label="add" >
                    <AddIcon onClick={handleOpenForm} />
                </Fab>
            ) : null}
        </Box>
    );
}

export default RoutineForm;