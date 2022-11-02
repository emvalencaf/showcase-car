// modules
const path = require('path');
const express = require('express');
    // app
const app = require('./src/app');
    // db
const connectDB = require('./src/db/connect.db');

// environment variables
const PORT = process.env.PORT || 3000;

    // Upload directory
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));// in this directory will be saved the photos of our project

console.log(__dirname);


// function to create web serverr
const main = async () => {

    try{

        // connection with mongoDB's database
        await connectDB();

    
        app.listen(PORT, () => {

            console.log(`O app está rodando na porta ${PORT}`);

        });

    } catch(err){

        console.error(err);

    };


};

main();

