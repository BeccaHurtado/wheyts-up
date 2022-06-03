import React from 'react'
import { Link } from 'react-router-dom'

const ExerciseList = ({ exerciseData }) => {
 
    if (!exerciseData) {
        return <h3>Create a routine!</h3>
    }

    return (
        <div>
            {exerciseData && exerciseData.map(exercise => (
                <div key={exercise._id}>
                    <p>
                        {exercise.name}
                    </p>
                </div>
            ))}
        </div>

    )
}

export default ExerciseList
            