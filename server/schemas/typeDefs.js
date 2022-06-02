const { gql } = require('apollo-server-express')

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    routines: [Routine]
}
type Routine {
    _id: ID
    routineName: String
    workoutType: String
    username: User
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
    routines: [Routine]
    routine(_id: ID!): Routine
    exercises(routineId: ID): [Exercise]
    exercise(_id: ID!): Exercise
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addRoutine(routineName: String!, workoutType: String!): Routine
    deleteRoutine(_id: ID!): Routine
    editRoutine(routineName: String!, workoutType: String!, _id: ID!): Routine
    addExercise(name: String!, equipment: String!, time: Int!, weight: Int!, sets: Int!, reps: Int!, routineId:ID): Exercise
    deleteExercise(_id: ID!): Exercise
    editExercise(_id: ID!, name: String!): Exercise
}
`;

// export the typeDefs
module.exports = typeDefs;