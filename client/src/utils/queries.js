import { gql } from '@apollo/client'

export const QUERY_ROUTINES = gql`
 query routines {
    routines {
        _id
        routineName
        workoutType
        username {
            _id
            username
        }
    exercise1
    set1
    rep1
    exercise2
    set2
    rep2
    exercise3
    set3
    rep3
    exercise4
    set4
    rep4
    exercise5
    set5
    rep5
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
