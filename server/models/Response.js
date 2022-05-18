const { Schema } = requrie('mongoose')
// date format

const responseSchema = new Schema (
    {
        responseBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // get timestamp
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
)

module.exports = responseSchema