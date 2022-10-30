// modules
const express = require('express');


// initialize app
const app = express();


// Middlewares

    // config JSON and FormData responses
app.use(express.json()); // to work with JSON responses
app.use(express.urlencoded({extended: false})); // to work with FormData


    // routes
const router = require('./routes/Router');


app.use(router);



module.exports = app;