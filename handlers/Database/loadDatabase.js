const mongoose = require('mongoose');
const { MONGO_URI } = require('../../settings/config.js');

module.exports = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
    } catch (error) {
        console.log(error);
    }
} 