// modules
const express = require('express');

// router
const router = express();

    // user routes
router.use('/api/user', require('./user/User.routes'));

    // car routes
router.use('/api/car', require('./car/Car.routes'));

    // test route
router.get('/', (req, res) => {

    res.send('API working!!');

});


module.exports = router;