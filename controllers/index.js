const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', require('./dashboard.js'));

module.exports = router;