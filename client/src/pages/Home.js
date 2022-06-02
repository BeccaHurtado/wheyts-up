import React from 'react';
import { useQuery } from '@apollo/client'
import { QUERY_ROUTINES } from '../utils/queries'
import RoutineList from '../components/RoutineList'
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
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <RoutineList routines={routines} title="Get Moving!" />
                )}
            </div>
        </main>
    );
};


export default Home;