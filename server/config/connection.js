const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://120.0.0.1/wheyts-up', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

module.exports = mongoose.connection;