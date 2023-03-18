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

router.get('/webpage', async (req, res) => {
  res.render('webpage');
});

router.get('/users', async (req, res) => {
  try {
    const userData = await user.findAll({
      include: [
        {
          model: user,
          attributes: ['name'],
        },
      ],
    });

    const projects = userData.map((data) => data.get({ plain: true }));

    res.render('webpage', {
      projects,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
