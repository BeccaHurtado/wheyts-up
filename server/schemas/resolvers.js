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
        routines: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Routine.find(params).sort({ createdAt: -1 });
        },
        routine: async (parent, { _id }) => {
            return Routine.findOne({ _id });
        }
        // ,
        // exercises: async (parent, { username }) => {
        //     const params = username ? { username } : {};
        //     return Exercise.find(params).sort({ createdAt: -1 });
        // },
        // exercise: async (parent, { _id }) => {
        //     return Exercise.findOne({ _id });
        // }
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
            // if (context.user) {
            const routine = await Routine.create({ ...args, username: "becca" })//context.user.username });

            await User.findByIdAndUpdate(
                { _id: "629049dd926412cb4622ef71" },//context.user._id },
                { $push: { routine: routine._id } },
                { new: true }
            );

            return routine;
            // }

            // throw new AuthenticationError('You need to be logged in!');
        },
        // { routineId, name, equipment, time, weight, sets, reps }
        // { name: context.name, equipment: context.equipment, time: context.time, weight: context.weight, sets: context.sets, reps: context.reps }
        // addExercise: async (parent, args, context) => {
        //     if (context.user) {

        //         const exercise = Exercise.create({ ...args, username: "becca" });

        //         const updatedRoutine = await Routine.findOneAndUpdate(
        //             { _id: contex.routineId },
        //             { $push: { exercise: exercise._id } },
        //             { new: true }
        //         );
        //         return updatedRoutine;
        //     }
        // },
        addExercise: async (parent, args, context) => {
            const exercise = await Exercise.create({ ...args, username: "becca" }) //context.user.username });

            await Routine.findByIdAndUpdate(
                { _id: context.routineId },//context.user._id }, "629049dd926412cb4622ef71"
                // { routineId: context.routine._id },
                { $push: { exercise: exercise._id } },
                { new: true }
            );

            return exercise;
        },

        // throw new AuthenticationError('You need to be logged in!');

        deleteRoutine: async (parent, { _id }) => {
            return Routine.findByIdAndDelete({ _id: _id })
        },
        editRoutine: async (parent, args, context) => {
            // if (context.user) {
            const routine = await Routine.findByIdAndUpdate({ _id: args._id }, { $set: args }, { new: true })// username: context.user.username });

            return routine;
            // }
        },
        deleteExercise: async (parent, { _id }) => {
            return Exercise.findOneAndDelete({ _id: _id })
        },
        editExercise: async (parent, Exercise, context, args) => {
            // if (context.user) {
            // var exercise = {_id: exercise._id}
            const exercise = await Exercise.findByIdAndUpdate({ _id: Exercise._id }, { $set: args }, { new: true });

            return exercise;
            // }

        }
    }
};


//     (rating ?)-- using materialUI

module.exports = resolvers;