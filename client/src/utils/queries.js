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

export const QUERY_EXERCISES = gql `
query exercises {
    exercises {
        _id: ID
        name: String
        equipment: String
        time: Int
        weight: Int
        sets: Int
        reps: Int 
    }
}
`

export const QUERY_USER = gql`
query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      routines {
        _id
        routineName
        workoutType
        username
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
  }
`

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      routines {
        _id
        routineName
        workoutType
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
      createdAt
    }
  }
`;