const { gql } = require('apollo-server-express')

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    comments: [Comment]
    routines: [Routine]
    friends: [User]
}

type Reply {
    _id: ID
    replyBody: String
    username: [User]
    createdAt: String
}

type Comment {
    _id: ID
    commentText: String
    createdAt: String
    username: [User]
    replies: [Reply]
}

type Routine {
    _id: ID
    routineName: String
    workoutType: String
    username: ID
    exercises: [Exercise]
    createdAt: String
}

type Exercise {
    _id: ID
    name: String
    equipment: String
    time: Int
    weight: Int
    sets: Int
    reps: Int
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
    users: [User]
    user(username: String!): User
    routines(username: String!): [Routine]
    routine(_id: ID!): Routine
    exercises(routineId: ID): [Exercise]
    exercise(_id: ID!): Exercise
}


type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addRoutine(routineName: String!, workoutType: String!, userId: ID!): Routine
    deleteRoutine(_id: ID!): User
    editRoutine(routineName: String!, _id: ID!, workoutType: String!): Routine
    addExercise(name: String!, equipment: String!, time: Int!, weight: Int!, sets: Int!, reps: Int!, routineId: ID!): Routine
    deleteExercise(name: String!): User
    editExercise(_id: ID!, name: String!, equipment: String!, time: Int!, weight: Int!, sets: Int!, reps: Int!): Routine
}
`;

// export the typeDefs
module.exports = typeDefs;