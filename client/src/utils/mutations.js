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
        email
      }
    }
  }
`;

export const ADD_ROUTINE = gql`
  mutation addRoutine($routineName: String!, $workoutType: String!, $userId: ID, $exercises: exerciseInput!) {
    addRoutine(routineName: $routineName, workoutType: $workoutType, userId: $userId, exercises: $exercises) {
      _id
      routineName
      workoutType
      exercises {
        name
        equipment
        time
        weight
        sets
        reps
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
// `;