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
    exercise1: String
    set1: Int
    rep1: Int
    exercise2: String
    set2: Int
    rep2: Int
    exercise3: String
    set3: Int
    rep3: Int
    exercise4: String
    set4: Int
    rep4: Int
    exercise5: String
    set5: Int
    rep5: Int
    createdAt: String
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
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addRoutine(routineName: String!, workoutType: String!, exercise1: String!, set1: String!, rep1: String!, exercise2: String!, set2: String!, rep2: String!, exercise3: String!, set3: String!, rep3: String!, exercise4: String!, set4: String!, rep4: String!, exercise5: String!, set5: String!, rep5: String!): Routine
    deleteRoutine(_id: ID!): Routine
    editRoutine(_id: ID!, exercise1: String!, set1: Int!, rep1: Int!, exercise2: String!, set2: Int!, rep2: Int!, exercise3: String!, set3: Int!, rep3: Int!, exercise4: String!, set4: Int!, rep4: Int!, exercise5: String!, set5: Int!, rep5: Int!): Routine
}
`;

module.exports = typeDefs;
// addExercise(name: String!, equipment: String!, time: Int!, weight: Int!, sets: Int!, reps: Int!, routineId:ID): Exercise
// deleteExercise(_id: ID!): Exercise
// editExercise(_id: ID!, name: String!): Exercise
// export the typeDefs