// modules
const jwt = require('jsonwebtoken');

// AUTH
const jwtSecret = process.env.JWT_SECRET;

    // Generate user's token
const generateToken = (id) => {

    return jwt.sign(
        {id},
        jwtSecret,
        {
            expiresIn: '7d'
        }
    );

};

module.exports = {
    generateToken
};