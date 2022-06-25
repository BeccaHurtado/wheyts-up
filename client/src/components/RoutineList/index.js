import React from 'react'
import './routine.css'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
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
            <div className="listContainer">

                {routines && routines.map(routine => (
                    <List sx={{ bgcolor: 'background.paper' }} key={routine._id} className="lists">
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <FitnessCenterIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={routine.routineName} secondary={routine.createdAt} className="listName" />
                        </ListItem>

                        <ListItem>
                            <ListItemText className="text-color" variant="h1">
                                {routine.exercise1}
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText className="text-color">
                                {routine.set1} x {routine.rep1}
                            </ListItemText>
                        </ListItem>

                        <Divider variant="middle" component="li" />
                        <ListItem>
                            <ListItemText className="text-color">
                                {routine.exercise2}
                            </ListItemText>
                        </ListItem>
                        <Divider variant="middle" component="li" />
                        <ListItem>
                            <ListItemText className="text-color">
                                {routine.exercise3}
                            </ListItemText>
                        </ListItem>
                        <Divider variant="middle" component="li" />
                        <ListItem>
                            <ListItemText className="text-color">
                                {routine.exercise4}
                            </ListItemText>
                        </ListItem>
                        <Divider variant="middle" component="li" />
                        <ListItem>
                            <ListItemText className="text-color">
                                {routine.exercise5}
                            </ListItemText>
                        </ListItem>
                        <Divider variant="middle" component="li" />
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