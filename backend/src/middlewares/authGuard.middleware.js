// Modules
const jwt = require("jsonwebtoken");
    // User Controller
const { getUserById } = require('../controllers/User.controller');

// AUTH
const jwtSecret = process.env.JWT_SECRET;


const authGuard = async (req, res, next) => {

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ");

    // Check if header has a token
    if(!token) return res.status(401).json({errors:["Acesso negado!"]});

    // Check if token is valid
    try{

    } catch(err){

        res.status(401).json({errors:["Token inválido!"]});

    };

};

module.exports = authGuard;