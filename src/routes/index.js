const router = require('express').Router();

const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboard');

router.use('/api', apiRoutes);
router.use('/', dashboardRoutes);

router.use((req, res) => {
  res.status(404);
  res.render('404', {
    layout: 'blank',
  });
});

module.exports = router;