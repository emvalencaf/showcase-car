// modules
const mongoose = require('mongoose');


// Create user's Schema
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String
},{
    timestamps: true
});

// Create user's model
const User = mongoose.model('User', userSchema);

module.exports = User;