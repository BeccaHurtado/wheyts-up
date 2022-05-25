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
    routineName: String
    workoutType: String
    username: [User]
    exercises: [Exercise]
    createdAt: Date
}

type Exercise {
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
    users: [User]
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
}
`

// export the typeDefs
module.exports = typeDefs;