// modules
const bcrypt = require('bcryptjs');
    // AUTH
const {
    generateToken
} = require('../auth/generateToken.auth');

// User Repository
const {
    findUserByEmail,
    createUser,
    findUserById
} = require('../repository/User.repository');

// Controller
    // Register user and sign in
const register = async (req, res) => {

    const { name, email, password } = req.body;

    // check if user exists
    const user = await findUserByEmail(email);

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
    res.status(201).json(getIdAndToken(newUser._id));

};

const login = async (req, res) => {

    const { email, password } = req.body;

    const user = await findUserByEmail(email);

    // Check if user exists
    if(!user) return res.status(404).json({errors:["Usuário não encontrado."]});

    // Check if password matches
    if(!(await bcrypt.compare(password, user.password))) return res.status(422).json({errors:["Senha inválida."]});

    // Return user id and token
    res.status(200).json(getIdAndToken(user._id));

};

const getIdAndToken = (id) => {
    return {
        _id: id,
        token: generateToken(id)
    };
};

const getUserById = async (id) => {
    return await findUserById(id);
};


module.exports = {
    register,
    getUserById
};