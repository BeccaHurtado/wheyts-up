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
import WorkIcon from '@mui/icons-material/Work'
import StarIcon from '@mui/icons-material/Star'


const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const RoutineList = ({ routines, title }) => {
 
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
                                    <WorkIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={routine.routineName} secondary={routine.createdAt} className="listName" />
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