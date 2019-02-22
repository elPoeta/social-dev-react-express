const Profile = require('../models/Profile');
const User = require('../models/User');

module.exports = {
    getProfile: async (req, res, next) => {
        const errors = {};
        try {
            const profile = await Profile.findOne({ user: req.user.id });
            if (!profile) {
                errors.noProfile = 'No profile for this user';
                return res.status(404).json(errors);
            }
            res.json(profile);
        } catch (error) {
            return res.status(404).json(error);
        }

    },
    createOrUpdateProfile: async (req, res, next) => {
        const errors = {};
        const { handle, company, website, location,
            status, bio, githubuser, skills, linkedin,
            twitter, youtube, facebook } = req.body;
        const profileFields = {};
        profileFields.user = req.user.id;
        profileFields.social = {};
        try {
            const profile = await Profile.findOne({ user: req.user.id });
            if (profile) {

            }
        } catch (error) {

        }
    }
}