const { AuthenticationError } = require('apollo-server-express');
const { User, Routine, Exercise } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password');

                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },
        users: async () => {
            return User.find()
                .select('-__v -password');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password');
        },
        routines: async (parent) => {
            // const params = userId ? { userId } : {};
            // return Routine.find().sort({ createdAt: -1 }).populate("exercises")
            return Routine.find().sort({ createdAt: -1 }).populate("username").populate("exercises")
        },
        routine: async (parent, { _id }) => {
            return Routine.findOne({ _id }).populate("exercises");
        },
        exercises: async (parent, { routineId }) => {
            const params = routineId ? { routineId } : {};
            return Exercise.find(params).sort({ createdAt: -1 });
        },
        exercise: async (parent, { _id }) => {
            return Exercise.findOne({ _id });
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
        addRoutine: async (parent, args, context) => {
            if (context.user) {
                const routine = await Routine.create({ ...args, username: context.user._id });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { routine: routine._id } },
                    { new: true }
                );

                return routine;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        addExercise: async (parent, { name, equipment, time, weight, sets, reps, routineId }, context) => {
            if (context.user) {
                const exercise = await Exercise.create({ name, equipment, time, weight, sets, reps });

                await Routine.findByIdAndUpdate(
                    { _id: routineId },
                    { $addToSet: { exercises: exercise._id } },
                    { new: true }
                ).populate("exercises");

                return exercise;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        deleteRoutine: async (parent, {_id}) => {
            return Routine.findByIdAndDelete({_id: _id})
        },
        editRoutine: async (parent, args, context) => {
            if (context.user) {
                const routine = await Routine.findByIdAndUpdate({ _id: args._id}, {$set: args}, {new: true });

                return routine;
            }
        },
        deleteExercise: async (parent, {_id }) => {
            return Exercise.findOneAndDelete({ _id: _id})
        },
        editExercise: async (parent, args, context) => {
            if (context.user) {
                const exercise = await Exercise.findByIdAndUpdate({ _id: args._id }, {$set:args}, {new: true});

                return exercise;
            }

        }
    }
};


//     (rating ?)-- using materialUI

module.exports = resolvers;