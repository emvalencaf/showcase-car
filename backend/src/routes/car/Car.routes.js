// modules
const express = require('express');

// Router
const router = express.Router();


// controller
const controller = require('../../controllers/Car.controller');


// middlewares
const validate = require('../../middlewares/handleValidation.middleware');

const {
    registerCarValidation
} = require('../../middlewares/validation/Car.validation');
const { imageUpload } = require('../../middlewares/imageUpload');
    // AUTH
const authGuard = require('../../middlewares/authGuard.middleware');


// routes
router.post('/register',
    authGuard,
    imageUpload.single('image'),
    registerCarValidation(),
    validate,
    controller.registerCar
);

router.get('/',
    controller.getAllCars
);

router.get('/:id',
    controller.getCarById
);

router.put('/:id',
    authGuard,
    imageUpload.single('image'),
    controller.updateCar
);

router.delete('/:id',
    authGuard,
    controller.deleteCarById
);

module.exports = router;