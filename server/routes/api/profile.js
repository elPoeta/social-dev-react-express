const express = require('express');
const router = express.Router();
const { getProfile, createOrUpdateProfile } = require('../../controllers/profile');
const passport = require('passport');
require('../../services/passport');
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignIn = passport.authenticate('local', { session: false });

router.get('/', requireAuth, getProfile);
router.post('/', requireAuth, createOrUpdateProfile);

module.exports = router;