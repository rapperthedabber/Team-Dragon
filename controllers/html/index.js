const router = require('express').Router();
const { user, Description } = require('../../models');

router.get('/', async (req, res) => {
  res.render('home', { loggedIn: req.session.loggedIn });
});
router.get('/test', async (req, res) => {
  res.render('test');
});

router.get('/login', async (req, res) => {
  res.render('login');
});

router.get('/webpage', async (req, res) => {
  try {
    const userData = await user.findAll({
      include: [
        {
          model: Description,
        },
      ],
    });

    const users = userData.map((data) => data.get({ plain: true }));
    console.log(users);
    res.render('webpage', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/users', async (req, res) => {
//   try {
//     const userData = await user.findAll({
//       include: [
//         {
//           model: user,
//         },
//       ],
//     });

//     const users = userData.map((data) => data.get({ plain: true }));
//     console.log(users);
//     res.render('webpage', {
//       users,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
