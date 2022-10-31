// Repository
const { reset } = require('nodemon');
const repository = require('../repository/Car.repository');

// Controller

const registerCar = async (req, res) => {

    res.send('registro de carro');
};

module.exports = {
    registerCar
};