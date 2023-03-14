const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render('all');
});
router.get('/test', async (req, res) => {
  res.render('test');
});

router.get('/login', async (req, res) => {
  res.render('login');
});

module.exports = router;
