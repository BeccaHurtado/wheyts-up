import { gql } from '@apollo/client'

export const QUERY_ROUTINES = gql`
 query routines {
    routines {
        _id
        routineName
        username
        workoutType
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
        createdAt
    }
 }
    
HEAD
`;

 HEAD
`;

`;
c024d473a023b3d9a29ad742f2e126385c450abf
 feature/apollo-server
