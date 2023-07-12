const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/csv-upload");

const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected successfully!');
});

module.exports = db;
