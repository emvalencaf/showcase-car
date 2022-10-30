// modules
const { validationResult } = require('express-validator');


// middleware validation
const validate = (req, res, next) => {

    const errors = validationResult(req);

    // If hasn't errors move on
    if(errors.isEmpty()) return next();

    const extractedErrors = [];

    errors.array().map( err => extractedErrors.push(err.msg));

    return res.status(422).json({
        errors: extractedErrors
    });

};

module.exports = validate;