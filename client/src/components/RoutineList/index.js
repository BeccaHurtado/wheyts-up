import React from 'react'
import { Link } from 'react-router-dom'
const RoutineList = ({ routines, title}) => {
    if (!routines.length) {
        return <h3>Create a routine!</h3>
    }

    return (
        <div>
            <h3>{title}</h3>
            {routines && routines.map(routine => (
                <div key={routine._id}>
                    <p>
                        <Link
                            to={`/profile/${routine.username.username}`}
                        >
                            {routine.username.username}
                        </Link>
                        {routine.createdAt}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default RoutineList