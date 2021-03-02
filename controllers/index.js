const router = require('express').Router();

const userRoutes = require('./api');
const postRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

router.use('/api', userRoutes);
router.use('/api', postRoutes);
router.use('/', homeRoutes);

module.exports = router;