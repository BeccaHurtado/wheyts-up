const { Schema, model } = require('mongoose')
const replySchema = require('./Reply')
const dateFormat = require('../utils/dateFormat')

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
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
            required: true
        },
        reply: [replySchema]
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