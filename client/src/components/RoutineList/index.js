import React from 'react'
import { Link } from 'react-router-dom'
import './routine.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box, Rating } from '@mui/material'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';



const RoutineList = ({ routines, title, length }) => {
 
    if (!routines.length) {
        return <h3>Create a routine!</h3>
    }

    return (
        <div>
            {/* <h3>{title}</h3>
            {routines && routines.map(routine => (
                <div key={routine._id}>
                    <p>
                        <Link
                            to={`/profile/${routine.username}`}
                        >
                            {routine.username}
                        </Link>
                        {routine.createdAt}
                    </p>
                </div>
            ))} */}


            <div className="listContainer">

                {routines && routines.map(routine => (
                    <List sx={{ bgcolor: 'background.paper' }} key={routine._id}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <FitnessCenterIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={routine.routineName} secondary={routine.createdAt} className="listName" />
                        </ListItem>
                        <ListItem>
                        <Typography className="username" component="legend">Rating</Typography>
                        <Rating
                            name="rating-id"
                            value={routine.rating}
                            onChange={(event, newValue) => {
                                console.log(routine)
                            }}
                        />
                        </ListItem>
                    </List>
                ))}

            </div>

        </div>
    )
}

export default RoutineList