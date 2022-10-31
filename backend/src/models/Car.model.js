// modules
const mongoose = require('mongoose');


// Create user's Schema
const { Schema } = mongoose;

const carSchema = new Schema({
    name: String,
    brand: String,
    model: String,
    image: String,
    price: Number
},{
    timestamps: true
});

// Create car's model
const Car = mongoose.model('Car', carSchema);

module.exports = Car;