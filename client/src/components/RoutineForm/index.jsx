import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { ADD_ROUTINE } from '../../utils/mutations'
import Button from '@mui/material/Button'
import { Fab, Grid, Paper, Typography, TextField, FormControl } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { Container } from '@mui/system'

const RoutineForm = ({client}) => {
   
    const [addRoutine, { error }] = useMutation(ADD_ROUTINE, {client} )

    const [inputFields, setInputField] = useState([{
        routineName: "",
        workoutType: "",
        exercise1: "",
        set1: "",
        rep1: "",
        exercise2: "",
        set2: "",
        rep2: "",
        exercise3: "",
        set3: "",
        rep3: "",
        exercise4: "",
        set4: "",
        rep4: "",
        exercise5: "",
        set5: "",
        rep5: ""
    }])

    const handleChangeInput = (index, event ) => {
        const values = [...inputFields]
        values[index][event.target.name] = event.target.value
        setInputField(values)
    }
    
    const handleSubmit = async(event) => {
        console.log(inputFields)
        console.log(setInputField)
        await addRoutine({
            variables: {
                ...inputFields[0]
                // inputFields: {...setInputField}
            }
        })

        window.location.reload("")
    }

    return (
        <Container>
            <h1>Add A Routine!</h1>
            <form onSubmit={handleSubmit}>
                { inputFields.map((inputFields, index ) => (
                    <div key={index}>
                        <TextField
                            name="routineName"
                            label="Routine Name"
                            variant="filled"
                            value={inputFields.routineName}
                            onChange={event => handleChangeInput(index, event)}
                        />

                        <TextField
                            name="workoutType"
                            label="Type of Workout"
                            variant="filled"
                            value={inputFields.workoutType}
                            onChange={event => handleChangeInput(index, event)}
                        />

                        <TextField
                            name="exercise1"
                            label="Exercise"
                            variant="filled"
                            value={inputFields.exercise1}
                            onChange={event => handleChangeInput(index, event)}
                        />

                        <TextField
                            name="set1"
                            label="Number of Sets"
                            variant="filled"
                            value={inputFields.set1}
                            onChange={event => handleChangeInput(index, event)}
                        />
                        
                        <TextField
                            name="rep1"
                            label="Number of Reps"
                            variant="filled"
                            value={inputFields.rep1}
                            onChange={event => handleChangeInput(index, event)}
                        />

                        <TextField
                            name="exercise2"
                            label="Exercise"
                            variant="filled"
                            value={inputFields.exercise2}
                            onChange={event => handleChangeInput(index, event)}
                        />

                        <TextField
                            name="set2"
                            label="Number of Sets"
                            variant="filled"
                            value={inputFields.set2}
                            onChange={event => handleChangeInput(index, event)}
                        />
                        
                        <TextField
                            name="rep2"
                            label="Number of Reps"
                            variant="filled"
                            value={inputFields.rep2}
                            onChange={event => handleChangeInput(index, event)}
                        />

                        <TextField
                            name="exercise3"
                            label="Exercise"
                            variant="filled"
                            value={inputFields.exercise3}
                            onChange={event => handleChangeInput(index, event)}
                        />

                        <TextField
                            name="set3"
                            label="Number of Sets"
                            variant="filled"
                            value={inputFields.set3}
                            onChange={event => handleChangeInput(index, event)}
                        />
                        
                        <TextField
                            name="rep3"
                            label="Number of Reps"
                            variant="filled"
                            value={inputFields.rep3}
                            onChange={event => handleChangeInput(index, event)}
                        />

                        <TextField
                            name="exercise4"
                            label="Exercise"
                            variant="filled"
                            value={inputFields.exercise4}
                            onChange={event => handleChangeInput(index, event)}
                        />

                        <TextField
                            name="set4"
                            label="Number of Sets"
                            variant="filled"
                            value={inputFields.set4}
                            onChange={event => handleChangeInput(index, event)}
                        />
                        
                        <TextField
                            name="rep4"
                            label="Number of Reps"
                            variant="filled"
                            value={inputFields.rep4}
                            onChange={event => handleChangeInput(index, event)}
                        />

                        <TextField
                            name="exercise5"
                            label="Exercise"
                            variant="filled"
                            value={inputFields.exercise5}
                            onChange={event => handleChangeInput(index, event)}
                        />

                        <TextField
                            name="set5"
                            label="Number of Sets"
                            variant="filled"
                            value={inputFields.set5}
                            onChange={event => handleChangeInput(index, event)}
                        />
                        
                        <TextField
                            name="rep5"
                            label="Number of Reps"
                            variant="filled"
                            value={inputFields.rep5}
                            onChange={event => handleChangeInput(index, event)}
                        />
                        <Button onClick={handleSubmit}>
                            <AddIcon/>
                        </Button>
                    </div>
                ))}
            </form>
        </Container>
    );
}

export default RoutineForm;