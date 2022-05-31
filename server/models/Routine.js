const { Schema, model } = require('mongoose')
const dateFormat = require('../utils/dateFormat')
const exerciseSchema = require('./Exercise')

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
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        exercises:
            [exerciseSchema]
    },
    {
        toJSON: {
            getters: true
        }
    }
)

routineSchema.virtual('exerciseCount').get(function () {
    return this.exercises.length;
});

const Routine = model('Routine', routineSchema)

module.exports = Routine;