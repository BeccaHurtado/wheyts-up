// const { Schema, model } = require('mongoose')

<<<<<<< HEAD
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
=======
const exerciseSchema = new Schema(
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
<<<<<<< HEAD
            type: Number,
            // validate: {
            //     validator: Number.isInteger,
>>>>>>> ce1cf69b27ada1e89ce27a678b96ec35cb72cb6b

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

<<<<<<< HEAD
//             // }
//         }
//     },
//     {
//         toJSON: {
//             getters: true
//         }
//     }
// )
=======
            // }
=======
            type: Number,   
        },
        weight: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        reps: {
            type: Number,
>>>>>>> feature/apollo-server
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
)
>>>>>>> ce1cf69b27ada1e89ce27a678b96ec35cb72cb6b

// const Exercise = model('Exercise', exerciseSchema)

// module.exports = Exercise;