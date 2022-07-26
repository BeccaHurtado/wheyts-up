const { Schema, model } = require('mongoose')
const dateFormat = require('../utils/dateFormat')

const routineSchema = new Schema(
    {
        routineName: {
            type: String,
            required: 'Name your routine!'
        },
        workoutType: {
            type: String,
            required: 'What type of workout is this?'
        },
        username: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        exercise1: {
            type: String
        },
        set1: {
            type: String
        },
        rep1: {
            type: String
        },
        exercise2: {
            type: String
        },
        set2: {
            type: String
        },
        rep2: {
            type: String
        },
        exercise3: {
            type: String
        },
        set3: {
            type: String
        },
        rep3: {
            type: String
        },
        exercise4: {
            type: String
        },
        set4: {
            type: String
        },
        rep4: {
            type: String
        },
        exercise5: {
            type: String
        },
        set5: {
            type: String
        },
        rep5: {
            type: String
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
)

const Routine = model('Routine', routineSchema)

module.exports = Routine;