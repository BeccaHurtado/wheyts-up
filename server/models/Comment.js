const { Schema, model } = require('mongoose')
const responseSchema = require('./Response')
// date format here //

const commentSchema = new Schema (
    {
        commentText: {
            type: String,
            required: 'Leave some encouragement!',
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now
            // get timestamp
        },
        username: {
            type: String,
            required: true
        },
        response: [responseSchema]
    },
    {
        toJSON: {
            getters: true
        }
    }
);

commentSchema.virtual('responseCount').get(function() {
    return this.reactions.length
})

const Comment = model('Comment', commentSchema)

module.exports = Comment;