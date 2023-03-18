const router = require('express').Router();
const { json } = require('express');
const { user, Description } = require('../../models');

router.post('/signup', async (req, res) => {
  try {
    const userData = await user.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await user.findOne({
      where: { user_name: req.body.user_name },
    });

    if (!userData) {
      res.status(400).json({ message: 'no user' });
      return;
    }

    const correctPassword = await userData.goodPassword(req.body.password);

    if (!correctPassword) {
      res.status(400).json({ message: 'password sucks' });
      return;
    }
    console.log(userData);
    req.session.save(() => {
      req.session.user_id = userData.dataValues.id;
      req.session.loggedIn = true;
      console.log(req.session);
      return res.send({
        user: userData,
        message: 'You are now logged in!',
      });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post('/', async (req, res) => {
  try {
    const description = await Description.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.json(description);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
