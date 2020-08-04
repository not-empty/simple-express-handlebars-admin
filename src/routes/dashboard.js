const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Simple Admin',
  });
});

router.get('/login', (req, res) => {
  res.render('login', {
    layout: 'auth',
  });
});

router.get('/forgot-password', (req, res) => {
  res.render('forgot-password', {
    layout: 'auth',
  });
});

router.get('/register', (req, res) => {
  res.render('register', {
    layout: 'auth',
  });
});

router.get('/404', (req, res) => {
  res.render('404');
});

router.get('/blank', (req, res) => {
  res.render('blank');
});

router.get('/buttons', (req, res) => {
  res.render('buttons');
});

router.get('/cards', (req, res) => {
  res.render('cards');
});

router.get('/charts', (req, res) => {
  res.render('charts');
});

router.get('/charts', (req, res) => {
  res.render('charts');
});

router.get('/tables', (req, res) => {
  res.render('tables');
});

router.get('/utilities-animation', (req, res) => {
  res.render('utilities-animation');
});

router.get('/utilities-border', (req, res) => {
  res.render('utilities-border');
});

router.get('/utilities-color', (req, res) => {
  res.render('utilities-color');
});

router.get('/utilities-other', (req, res) => {
  res.render('utilities-other');
});

module.exports = router;