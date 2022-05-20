const { Schema, model } = require('mongoose')

const exerciseSchema = new Schema (
    {
        name: {
            type: String,
            required: 'Leave a workout!',
            minlength: 1,
            maxlength: 280
        },
        equipment: {
            type: String
        },
        time: {
            type: Integer
        },
        weight: {
            type: Integer
        },
        sets: {
            type: Integer
        },
        reps: {
            type: Integer
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
)

const Exercise = model('Exercise', exerciseSchema)

module.exports = exerciseSchema;