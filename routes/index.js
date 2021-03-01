const router = require('express').Router();

const userRoutes = require('./api');

router.use('/api', userRoutes);

module.exports = router;
