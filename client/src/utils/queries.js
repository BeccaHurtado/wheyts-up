import { gql } from '@apollo/client'

export const QUERY_ROUTINES = gql`
 query getRoutines ($routineName: String) {
    getRoutines(routineName: $routineName) {
        _id
        routineName
        workoutType
    }
 }
    
<<<<<<< HEAD
`;
=======
<<<<<<< HEAD
`;
=======
`;
>>>>>>> c024d473a023b3d9a29ad742f2e126385c450abf
>>>>>>> feature/apollo-server
