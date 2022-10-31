// modules
const express = require('express');

// Router
const router = express.Router();



// Controller
const {
    register,
    login,
    updateUser,
    getUserById
} = require('../../controllers/User.controller');


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
router.post('/register',
    userCreateValidation(),
    validate,
    register
);

router.post('/login',
    loginValidation(),
    validate,
    login
);

router.patch('/update',
    authGuard,
    userUpdateValidation(),
    validate,
    updateUser
);

router.getUserById('/:id',
    getUserById
);

module.exports = router;