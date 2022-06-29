import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_ROUTINE = gql`
mutation addRoutine($routineName: String!, $workoutType: String!, $exercise1: String!, $set1: String!, $rep1: String!, $exercise2: String!, $set2: String!, $rep2: String!, $exercise3: String!, $set3: String!, $rep3: String!, $exercise4: String!, $set4: String!, $rep4: String!, $exercise5: String!, $set5: String!, $rep5: String!) {
  addRoutine(routineName: $routineName, workoutType: $workoutType, exercise1: $exercise1, set1: $set1, rep1: $rep1, exercise2: $exercise2, set2: $set2, rep2: $rep2, exercise3: $exercise3, set3: $set3, rep3: $rep3, exercise4: $exercise4, set4: $set4, rep4: $rep4, exercise5: $exercise5, set5: $set5, rep5: $rep5) {
    _id
  }
}
`;

export const EDIT_ROUTINE = gql`
  mutation editRoutine($routineName: String!, $id: ID!, $workoutType: String!, $exercises: exerciseInput!) {
    editRoutine(routineName: $routineName, _id: $id, workoutType: $workoutType, exercises: $exercises) {
      _id
      routineName
      workoutType
      exercises {
        name
        _id
      }
    }
  }
`;

export const DELETE_ROUTINE = gql`
  mutation deleteReaction($id: ID!) {
    deleteReaction(_id: $id) {
      _id
    }
  }
`;

// export const ADD_EXERCISE = gql`
//   mutation addFriend($id: ID!) {
//     addFriend(friendId: $id) {
//       _id
//       username
//       friendCount
//       friends {
//         _id
//         username
//       }
//     }
//   }
// `;

// export const DELETE_EXERCISE = gql`
//   mutation removeFriend($id: ID!) {
//     removeFriend(id: $id) {
//       _id
//       username
//       friends {
//         _id
//         username
//       }
//     }
//   }
// `;
// export const EDIT_EXERCISE = gql`
//   mutation removeFriend($id: ID!) {
//     removeFriend(id: $id) {
//       _id
//       username
//       friends {
//         _id
//         username
//       }
//     }
//   }
// `;
// export const REMOVE_FRIEND = gql`
//   mutation removeFriend($id: ID!) {
//     removeFriend(id: $id) {
//       _id
//       username
//       friends {
//         _id
//         username
//       }
//     }
//   }

