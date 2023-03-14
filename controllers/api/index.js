const router = require('express').Router();
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
router.use('/login', userRoutes);
//router.use('/form', userRoutes);

module.exports = router;
