const { Schema, model } = require('mongoose')
//date formate here <---- utils/dateFormat ---->

const routineSchema = new Schema (
    {
        workoutType: {
            type: String,
            required: 'What type of workout is this?'
        },
        exerciseEquipment: {
            type: String
        },
        exercise: {
            type: String,
            required: 'Leave a workout!',
            minlength: 1,
            maxlength: 280
        },
        sets: {
            type: Integer
        },
        reps: {
            type: Integer
        },
        // createdAt: {
        //     type: Date,
        //     default: Date.now,
        //     get: timestamp => dateFormat(timestamp)
        // },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date, 
            default: Date.now
            //get timestamp
        }

    },
    {
        toJSON: {
            getters: true
        }
    }
)

module.exports = routineSchema;