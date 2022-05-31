import { gql } from '@apollo/client'

export const QUERY_ROUTINES = gql`
 query getRoutines ($routineName: String) {
    getRoutines(routineName: $routineName) {
        _id
        routineName
        workoutType
    }
 }
    
`;
