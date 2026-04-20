const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/test')
    }
    catch (err) {
        console.log('Could not connect to MongoDB', err);
    }
}

module.exports = {
    connect
}