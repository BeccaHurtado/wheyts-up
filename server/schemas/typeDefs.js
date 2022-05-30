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
    userId: ID
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
    exercises(username: String!): [Exercise]
    exercise(_id: ID!): Exercise
}

input exerciseInput{
    name: String
    equipment: String
    time: Int
    weight: Int
    sets: Int
    reps: Int
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addRoutine(routineName: String!, workoutType: String!, userId: ID!, exercises: exerciseInput!): Routine
    deleteRoutine(routineName: String!): User
    editRoutine(routineName: String!, _id: ID!): Routine
    addExercise(name: String!, equipment: String!, time: Int!, weight: Int!, sets: Int!, reps: Int!): Exercise
    deleteExercise(name: String!): User
    editExercise(name: String!, equipment: String!, time: Int!, weight: Int!, sets: Int!, reps: Int!): Exercise
}
`;

// export the typeDefs
module.exports = typeDefs;