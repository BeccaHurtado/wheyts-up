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
            type: Number
        },
        rep1: {
            type: Number
        },
        exercise2: {
            type: String
        },
        set2: {
            type: Number
        },
        rep2: {
            type: Number
        },
        exercise3: {
            type: String
        },
        set3: {
            type: Number
        },
        rep3: {
            type: Number
        },
        exercise4: {
            type: String
        },
        set4: {
            type: Number
        },
        rep4: {
            type: Number
        },
        exercise5: {
            type: String
        },
        set5: {
            type: Number
        },
        rep5: {
            type: Number
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