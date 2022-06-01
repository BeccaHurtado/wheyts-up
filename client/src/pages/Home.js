Head
import React from 'react';
import { useQuery } from '@apollo/client'
import { QUERY_ROUTINES } from '../utils/queries'

import { Menu, MenuItem, Button } from '@mui/material';

function Home() {
    const { loading, data } = useQuery(QUERY_ROUTINES)
    const routines = data?.routines || []
    console.log(routines)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <main>
            <div>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    Dashboard
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>Login</MenuItem>
                    <MenuItem onClick={handleClose}>Signup</MenuItem>
                    {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
                </Menu>
            </div>
        </main>
    );
};

import { useQuery } from '@apollo/client'
import { QUERY_ROUTINES } from '../utils/queries'

const Home = () => {
    const { loading, data } = useQuery(QUERY_ROUTINES)
    const routines = data?.routines || []
    console.log(routines)
    return (
        <main>
            <div>Hello</div>
        </main>
    )
}


export default Home;