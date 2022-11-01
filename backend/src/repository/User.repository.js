// modules
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
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

    // Check if was passed an id or valid id
    try{
        return await User.findById(mongoose.Types.ObjectId(id)).select('-password');

    } catch(err){
        console.log(err);
        return;
    };

};

    // update user
const updateUser = async (userData, newData) => {

    const { name, password } = newData;

    const user = await findUserById(userData._id);

    if(!user) return;

    if(name) user.name = name;

    if(password) user.password = password;

    await user.save();

    return user;

};

module.exports = {
    findUserByEmail,
    createUser,
    findUserById,
    updateUser
};