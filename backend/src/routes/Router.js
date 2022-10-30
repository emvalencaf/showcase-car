// modules
const express = require('express');

// router
const router = express();

    // user routes
router.use('/api/users', require('./user/User.routes'));

module.exports = router;