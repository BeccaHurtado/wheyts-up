import React from 'react'
import { Link } from 'react-router-dom'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material'
import WorkIcon from '@mui/icons-material/Work'

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

            <div>
                {routines && routines.map(routine => (
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} key={routine._id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <WorkIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={routine.routineName} secondary="Jan 9, 2014" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <WorkIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={routine.username} secondary="Jan 7, 2014" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <WorkIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Vacation" secondary="July 20, 2014" />
                    </ListItem>
                </List>
                ))}
                
            </div>

        </div>
    )
}

export default RoutineList