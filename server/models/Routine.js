const { Schema, model } = require('mongoose');
const { Exercise } = require('.');
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
        exercises: [{
            type: Schema.Types.ObjectId,
            ref: 'Exercise'
        }],
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