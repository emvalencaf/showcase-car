// modules
    // app
const app = require('./src/app');
    // db
const connectDB = require('./src/db/connect.db');

// environment variables
const PORT = process.env.PORT || 3000;



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

