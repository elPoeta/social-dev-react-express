const express = require('express');
const router = express.Router();
const { getProfile, getProfileHandle,
    getProfileByUserId, getAllProfiles,
    createOrUpdateProfile } = require('../../controllers/profile');
const passport = require('passport');
require('../../services/passport');
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignIn = passport.authenticate('local', { session: false });

router.get('/', requireAuth, getProfile);
router.get('/handle/:handle', getProfileHandle);
router.get('/user/:userId', getProfileByUserId);
router.get('/all', getAllProfiles);
router.post('/', requireAuth, createOrUpdateProfile);

module.exports = router;