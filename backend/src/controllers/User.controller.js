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

// Repository
const {
    findUser,
    createUser
} = require('../repository/User.repository');

// Controller
    // Register user and sign in
const register = async (req, res) => {

    const { name, email, password } = req.body;

    // check if user exists
    const user = await findUser(email);

    if(user) return res.status(422).json({errors:["Por favor, utilize um e-mail não registrado."]});

    // Create user
    const newUser = await createUser({
        name,
        email,
        password
    });

    // If user was created sucessfully, return the token
    if(!newUser) return res.status(422).json({errors:["Houve um erro, por favor, tente mais tarde."]});

    // send user id and toke to the frontend
    res.status(201).json({
        _id: newUser.id,
        token: generateToken(newUser._id)
    });

};

module.exports = {
    register
};