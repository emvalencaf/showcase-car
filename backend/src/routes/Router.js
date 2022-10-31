// modules
const express = require('express');

// router
const router = express();

    // user routes
router.use('/api/users', require('./user/User.routes'));

    // car routes
router.use('/api/cars', require('./car/Car.routes'));

    // test route
router.get('/', (req, res) => {

    res.send('API working!!');

});


module.exports = router;