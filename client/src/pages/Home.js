import React from 'react';
import { useQuery } from '@apollo/client'
import { QUERY_ROUTINES } from '../utils/queries'
import RoutineList from '../components/RoutineList'

function Home() {
    const { loading, data } = useQuery(QUERY_ROUTINES)
    const routines = data?.routines || []
    console.log(routines)
    
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