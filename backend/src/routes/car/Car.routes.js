// modules
const express = require('express');

// Router
const router = express.Router();


// controller
const {
    registerCar
} = require('../../controllers/Car.controller');
// middlewares
const {
    registerCarValidation
} = require('../../middlewares/validation/Car.validation');
    // AUTH
const authGuard = require('../../middlewares/authGuard.middleware');
const { validate } = require('../../models/Car.model');


// routes
router.post('/register',
    authGuard,
    registerCarValidation(),
    validate,
    registerCar
);

module.exports = router;