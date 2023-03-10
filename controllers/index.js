
const router = require('express').Router();
const userRoutes = require('./api/userRoutes');
const apiRoutes = require('./api');

router.use('/', userRoutes);
router.use('/api', apiRoutes);

module.exports = router;
