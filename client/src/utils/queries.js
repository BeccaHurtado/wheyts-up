import { gql } from '@apollo/client'

export const QUERY_ROUTINES = gql`
 query routines {
    routines {
        _id
        routineName
        username
        workoutType
        exercises {
            _id
            name
        }
        createdAt
    }
 }
    
`;