// modules
const express = require('express');

// Router
const router = express.Router();


// controller
const {

} = require('../../controllers/Car.controller');

// middlewares
const {
    insertCarValidation
} = require('../../middlewares/validation/Car.validation');
    // AUTH
const authGuard = require('../../middlewares/authGuard.middleware');

// routes
router.post('/',
    authGuard,
    insertCarValidation,
    
);

module.exports = router;