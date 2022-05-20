const {Schema, model} = require('mongoose')
const dateFormat = require('../utils/dateFormat')

const routineSchema = new Schema (
   { 
    routineName: {
        type: String,
        required: 'Name your routine!'
    },
    workoutType: {
        type: Array,
        title: "Workout Type",
        items: {
            type: String,
            enum: ["weights", "cardio", "calisthenics", "weights + cardio", "weigths + calisthenics", "cardio + calisthenics", "other" ]
        },
         uniqueItems: true
    },
    username: {
        type: [User],
        required: true
    },
    exercises: [Exercise],
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