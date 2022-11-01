// modules
const express = require('express');

// Router
const router = express.Router();



// Controller
const controller = require('../../controllers/User.controller');


// Middlewares

    // validation
const validate = require('../../middlewares/handleValidation.middleware');

const {
    userCreateValidation,
    loginValidation,
    userUpdateValidation
} = require('../../middlewares/validation/User.validation');

    // Auth
const authGuard = require("../../middlewares/authGuard.middleware");


// routes

router.get('/profile', authGuard, controller.getCurrentUser);

router.post('/register',
    userCreateValidation(),
    validate,
    controller.register
);

router.post('/login',
    loginValidation(),
    validate,
    controller.login
);

router.put('/',
    authGuard,
    userUpdateValidation(),
    validate,
    controller.updateUser
);

router.get('/:id',
    controller.getUserById
);

module.exports = router;