import { gql } from '@apollo/client'

export const QUERY_ROUTINES = gql`
 query routines {
    routines {
        _id
        routineName
        workoutType
        createdAt
        username {
            _id
            username
        }
        exercises {
            _id
            name
            equipment
            time
            weight
            sets
            reps
        }
    }
 }
`;