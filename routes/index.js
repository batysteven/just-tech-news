const router = require('express').Router();

const userRoutes = require('./api');
const postRoutes = require('./api');

router.use('/api', userRoutes);
router.use('/api', postRoutes);

module.exports = router;
