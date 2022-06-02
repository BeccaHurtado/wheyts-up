import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import Auth from "../../utils/auth";

const RoutineForm = () => {
    const handleOpenForm = () => {
        //
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