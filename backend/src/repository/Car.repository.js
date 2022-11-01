// Modules
const mongoose = require('mongoose');
const Car = require('../models/Car.model');

// Create a car register
const registerCar = async (dataCar) => {
    return await Car.create(dataCar);
};

// Find car register by a id
const findById = async (id) => {
    
    // Check if was passed an id or valid id
    try{

        return await Car.findById(mongoose.Types.ObjectId(id));

    } catch(err){
        console.log(err);
        return;
    };

};

const updateCar = async (dataCar, newData) => {


};

// Get all Cars in a desc ORD
const getAllCars = async () => {

    return await Car.find({}).sort([["price", -1]]).exec();

};

// Delete car by id
const deleteCarById = async (id) => {

    return await Car.findByIdAndDelete(id);

};



module.exports = {
    registerCar,
    findById,
    getAllCars,
    deleteCarById
};