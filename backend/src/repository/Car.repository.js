// Modules
const Car = require('../models/Car.model');

// create a car register
const registerCar = async (dataCar) => {
    return await Car.create(dataCar);
};



module.exports = {
    registerCar
};