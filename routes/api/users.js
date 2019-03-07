const express = require('express');
const router = express.Router();
const { register, login } = require('../../controllers/users');
const passport = require('passport');
require('../../services/passport');
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignIn = passport.authenticate('local', { session: false });
const validateRegister = require('../../utils/register');
const validateLogin = require('../../utils/login');

router.post('/register', validateRegister, register);
router.post('/login', validateLogin, requireSignIn, login);

module.exports = router;