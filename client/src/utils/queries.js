import { gql } from '@apollo/client'

export const QUERY_EXERCISES = gql`
 type getExercises {
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
`;
