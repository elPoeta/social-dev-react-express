const express = require('express');
const router = express.Router();
const { register, login, current } = require('../../controllers/users');
const { validateBody, schemas } = require('../../utils/validation');
const passport = require('passport');
require('../../services/passport');
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignIn = passport.authenticate('local', { session: false });


router.post('/register', validateBody(schemas.registerSchema), register);
router.post('/login', validateBody(schemas.loginSchema), requireSignIn, login);
router.get('/current', requireAuth, current);

module.exports = router;