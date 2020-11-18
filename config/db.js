// keeping mongoDB connection here
const config = require('config');

const mongoose = require('mongoose');

const db = config.get('mongoURI');


// mongoose.connect(db);
const connectToDB = async () => {
    try {
        await mongoose.connect(db,
            {
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,
                useUnifiedTopology: true
            }) // returns promise, so remember..await before
        console.log('===== ::  Successfully connected to MongoDB  ::')
    } catch (err) {
        console.error(err.message);
        process.exit(1); // with failure!
    }
}

module.exports = connectToDB;
