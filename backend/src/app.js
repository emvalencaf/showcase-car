// modules
const express = require('express');
const cors = require('cors');
const path = require('path');

// initialize app
const app = express();


// Middlewares

    // config JSON and FormData responses
app.use(express.json()); // to work with JSON responses
app.use(express.urlencoded({extended: false})); // to work with FormData

    // Solve CORS
app.use(cors({
    credentials: true,
    origin:'http://localhost:3000'
}));


console.log(__dirname);

    // routes
const router = require('./routes/Router');


app.use(router);



module.exports = app;