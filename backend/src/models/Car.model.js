// modules
const mongoose = require('mongoose');


// Create user's Schema
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    brand: String,
    model: String,
    image: String
},{
    timestamps: true
});

// Create user's model
const Car = mongoose.model('Car', userSchema);

module.exports = User;