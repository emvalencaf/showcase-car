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
    userCreateValidation,
    loginValidation
} = require('../../middlewares/validation/User.validation');

    // Auth
const {
    authGuard
} = require("../../middlewares/authGuard.middleware");


// routes
router.post('/register', userCreateValidation(), validate, register);

module.exports = router;