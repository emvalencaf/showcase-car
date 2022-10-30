// modules
const express = require('express');

// Router
const router = express.Router();



// Controller
const {
    register
} = require('../../controllers/User.controller');


// Middlewares
    // validation
const validate = require('../../middlewares/handleValidation.middleware');

const {

} = require('../../middlewares/validation/User.validation');



// routes
router.post('/register', validate, register);