import React from 'react';
import { useQuery } from '@apollo/client'
import { QUERY_ROUTINES, QUERY_EXERCISES } from '../utils/queries'
import RoutineList from '../components/RoutineList'
import { Menu, MenuItem, Button } from '@mui/material';
import ExerciseList from '../components/ExerciseList';

function Home() {
    const { loading, data } = useQuery(QUERY_ROUTINES)
    const { data: exerciseData } = useQuery(QUERY_EXERCISES);
    const routines = data?.routines || []
    console.log(routines)
    console.log(exerciseData)

    return (
        <main>
            <div>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <RoutineList routines={routines} title="Get Moving!"/>
                    )
                }
                
            </div>
            <div>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <ExerciseList exerciseData={exerciseData} title="Get Moving!"/>
                    )
                }
            </div>
        </main>
    );
};


export default Home;