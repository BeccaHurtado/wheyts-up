// const { Schema, model } = require('mongoose')

// const exerciseSchema = new Schema(
//     {
//         name: {
//             type: String,
//             required: 'Leave a workout!',
//             minlength: 1,
//             maxlength: 280
//         },
//         equipment: {
//             type: String
//         },
//         time: {
//             type: Number,
//             // validate: {
//             //     validator: Number.isInteger,

//             // }
//         },
//         weight: {
//             type: Number,
//             // validate: {
//             //     validator: Number.isInteger,

//             // }
//         },
//         sets: {
//             type: Number,
//             // validate: {
//             //     validator: Number.isInteger,

//             // }
//         },
//         reps: {
//             type: Number,
//             // validate: {
//             //     validator: Number.isInteger,

//             // }
//         }
//     },
//     {
//         toJSON: {
//             getters: true
//         }
//     }
// )

// const Exercise = model('Exercise', exerciseSchema)

// module.exports = Exercise;