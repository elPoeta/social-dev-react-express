const express = require('express');
const router = express.Router();
const { getProfile, getProfileHandle, getProfileByUserId,
    getAllProfiles, createOrUpdateProfile, addExperience,
    addEducation, deleteProfile, deleteExperience, deleteEducation } = require('../../controllers/profile');
const passport = require('passport');
require('../../services/passport');
const requireAuth = passport.authenticate('jwt', { session: false });
const validateProfile = require('../../utils/profile');
const validateEducation = require('../../utils/education');
const validateExperience = require('../../utils/experience');


router.get('/', requireAuth, getProfile);
router.get('/handle/:handle', getProfileHandle);
router.get('/user/:userId', getProfileByUserId);
router.get('/all', getAllProfiles);
router.post('/', validateProfile, requireAuth, createOrUpdateProfile);
router.post('/experience', validateExperience, requireAuth, addExperience);
router.post('/education', validateEducation, requireAuth, addEducation);
router.delete('/', requireAuth, deleteProfile);
router.delete('/experience/:exp_id', requireAuth, deleteExperience);
router.delete('/education/:edu_id', requireAuth, deleteEducation);

module.exports = router;