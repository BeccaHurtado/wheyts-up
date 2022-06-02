const { Schema, model } = require('mongoose')
const dateFormat = require('../utils/dateFormat')

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

    }
})

const Routine = model('Routine', routineSchema)

module.exports = Routine;