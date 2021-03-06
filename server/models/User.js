const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new Schema (
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        password: {
            type: String,
            required: true,
            minlength: 8
        },
        routine: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Routine'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
)

// set up pre-saved middleware to create password
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds)
    }

    next();
})

// compare incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password)
};

// userSchema.virtuals('friendCount').get(function() {
//     return this.friends.length
// })

const User = model('User', userSchema);

module.exports = User;