// modules
const bcrypt = require('bcryptjs');
    // AUTH
const {
    generateToken
} = require('../auth/generateToken.auth');

// User Repository
const repository = require('../repository/User.repository');

// Controller
    // Register user and sign in
const register = async (req, res) => {

    const { name, email, password } = req.body;

    // check if user exists
    const user = await repository.findUserByEmail(email);

    if(user) return res.status(422).json({errors:["Por favor, utilize um e-mail não registrado."]});

    // Create user
    const newUser = await repository.createUser({
        name,
        email,
        password
    });

    // If user was created sucessfully, return the token
    if(!newUser) return res.status(422).json({errors:["Houve um erro, por favor, tente mais tarde."]});

    // send user id and toke to the frontend
    res.status(201).json(getIdAndToken(newUser._id));

};

const login = async (req, res) => {

    const { email, password } = req.body;

    const user = await repository.findUserByEmail(email);

    // Check if user exists
    if(!user) return res.status(404).json({errors:["Usuário não encontrado."]});

    // Check if password matches
    if(!(await bcrypt.compare(password, user.password))) return res.status(422).json({errors:["Senha inválida."]});

    // Return user id and token
    res.status(200).json(getIdAndToken(user._id));

};

// get user jwt token by id
const getIdAndToken = (id) => {
    return {
        _id: id,
        token: generateToken(id)
    };
};

// Get current logged in user
const getCurrentUser = async (req, res) => {

    const user = req.user;

    res.status(200).json(user);

};

// get user by id
const getUserById = async (req, res) => {

    const { id } = req.params;

    const user = await repository.findUserById(id);

    if(!user) return res.status(404).json({errors:['Usuário não encontrado']});

    res.status(200).json(user);
};

// update an user
const updateUser = async (req, res) => {

    // get data fields from req
    const { name, password } = req.body;

    // user's data get by the authGuard
    const reqUser = req.user;

    const newData = {
        name,
        password
    }

    const user = await repository.updateUser(reqUser, newData);

    if(!user) res.status(404).json({errors:['Usuário não encontrado']});

    return res.status(200).json(user);
};


module.exports = {
    register,
    getUserById,
    login,
    updateUser,
    getCurrentUser
};