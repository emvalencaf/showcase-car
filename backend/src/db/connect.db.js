// modules
const mongoose = require('mongoose');



// environment variables
    // mongoDB url
const mongoDBURL = process.env.DB_URL;
    // db's user credentials
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;



// connection to mongoDB
const connectDB = async () => {

    try{

        const dbConn = await mongoose.connect(
            `mongodb+srv://${dbUser}:${dbPassword}@${mongoDBURL}`
        );

        console.log('conectado ao banco de dados...');

        return dbConn;

    } catch(err){

    };

};

module.exports = connectDB;