const { gql } = require('apollo-server-express')

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    comments: [Comment]
    routine: [Routine]
    friends: [User]
}

type Routine {
    _id: ID
    routineName: String
    workoutType: String
    username: [User]
    exercises: [Exercise]
    createdAt: Date
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
    Exercises(username: String!): [Exercise]
    Exercise(_id: ID!): Exercise
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addWorkout(): Routine
    deleteWorkout(): User
    editWorkout(): Routine
    addExercise(): Exercise
    deleteExercise(): User
    editExercise(): Exercise
}
`;

// export the typeDefs
module.exports = typeDefs;