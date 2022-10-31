// modules
const bcrypt = require('bcryptjs');
const User = require('../models/User.model');




// Repository

    // find a user by an email
const findUserByEmail = async (email) => {

    return await User.findOne({email});

};

    // create an user
const createUser = async (userData) => {

    // Generate password hash
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(userData.password, salt);

    userData.password = passwordHash;

    // Create user
    return await User.create(userData);
}

    // get user by id
const findUserById = async (id) =>{
    return await User.findById(id);
};

module.exports = {
    findUserByEmail,
    createUser,
    findUserById
};