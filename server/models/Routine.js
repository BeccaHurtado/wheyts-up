const { Schema, model } = require('mongoose')
const dateFormat = require('../utils/dateFormat')

<<<<<<< HEAD
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
        exercises: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Exercise'
            }
        ],
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
=======
const routineSchema = new Schema (
   { 
    routineName: {
        type: String,
        // required: 'Name your routine!'
    },
    workoutType: {
        type: String,
        // required: 'What type of workout is this?' 
    },
    userId: {
       type: Schema.Types.ObjectId,
       ref: 'User'
    },
    exercises: 
    [exerciseSchema],
    createdAt: {
        type: Date, 
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
>>>>>>> feature/apollo-server
    }
)

const Routine = model('Routine', routineSchema)

module.exports = Routine;