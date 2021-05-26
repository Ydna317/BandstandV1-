const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');

const User = require('../models/Users');

// @route     POST api/users
// @desc      Regiter a user
// @access    Public
router.post(
  '/',
  [
    check('first_name', 'Please add first name')
      .not()
      .isEmpty(),
    check('last_name', 'Please include last name')
      .not()  
      .isEmpty(),
    check('username', 'Please choose a username')
      .not()
      .isEmpty(),
    check(
      'password',
      'Please enter a password with 6 or more characters',
    ).isLength({min: 6}),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }

    const {first_name, last_name, username, password} = req.body;

    try {
      let user = await User.findOne({username});

      if (user) {
        return res.status(400).json({msg: 'User already exists'});
      }

      user = new User({
        first_name,
        last_name,
        username,
        password,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({token});
        },
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },
);

module.exports = router;
