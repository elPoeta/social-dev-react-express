const Profile = require('../models/Profile');
const User = require('../models/User');

module.exports = {
    getProfile: async (req, res, next) => {
        const errors = {};
        try {
            const profile = await Profile
                .findOne({ user: req.user._id })
                .populate('user', ['name', 'avatar']);
            if (!profile) {
                errors.noProfile = 'No profile for this user';
                return res.status(404).json(errors);
            }
            res.json(profile);
        } catch (error) {
            return res.status(404).json(error);
        }

    },
    getProfileHandle: async (req, res, next) => {
        const errors = {};
        const { handle } = req.params;
        try {
            const profile = await Profile
                .findOne({ handle })
                .populate('user', ['name', 'avatar']);
            if (!profile) {
                errors.noProfile = 'No profile for this user';
                return res.status(404).json(errors);
            }
            res.json(profile);
        } catch (error) {
            res.status(404).json(error);
        }
    },
    getProfileByUserId: async (req, res, next) => {
        const errors = {};
        const user = req.params.userId;
        try {
            const profile = await Profile
                .findOne({ user })
                .populate('user', ['name', 'avatar']);
            if (!profile) {
                errors.noProfile = 'No profile for this user';
                return res.status(404).json(errors);
            }
            res.json(profile);
        } catch (error) {
            res.json({ Profile: 'No profile for this user' });
        }
    },
    getAllProfiles: async (req, res, next) => {
        const errors = {};
        try {
            const profile = await Profile
                .find()
                .populate('user', ['name', 'avatar']);
            if (!profile) {
                errors.noProfile = 'No profiles yet';
                return res.status(404).json(errors);
            }
            res.json(profile);
        } catch (error) {
            res.json({ Profile: 'No profiles yet' });
        }
    },
    createOrUpdateProfile: async (req, res, next) => {
        const errors = {};
        const user = req.user._id
        const { handle, company, website, location,
            status, bio, githubuser, skills, linkedin,
            twitter, youtube, facebook } = req.body;
        const profileFields = {};
        profileFields.user = user;
        profileFields.social = {};

        if (handle) profileFields.handle = handle;
        if (company) profileFields.company = company;
        if (website) profileFields.website = website;
        if (location) profileFields.location = location;
        if (status) profileFields.status = status;
        if (bio) profileFields.bio = bio;
        if (githubuser) profileFields.githubuser = githubuser;
        if (typeof skills !== 'undefined') profileFields.skills = skills.split(',');
        if (linkedin) profileFields.social.linkedin = linkedin;
        if (twitter) profileFields.social.twitter = twitter;
        if (youtube) profileFields.social.youtube = youtube;
        if (facebook) profileFields.social.facebook = facebook;

        try {
            const profile = await Profile.findOne({ user });
            if (profile) {
                const updateProfile = await Profile
                    .findOneAndUpdate(
                        { user },
                        { $set: profileFields },
                        { new: true });
                res.json(updateProfile);
            } else {
                const profile = await Profile.findOne({ handle });
                if (profile) {
                    errors.handle = 'That handle already exists';
                    res.status(400).json(errors);
                }
                const newProfile = await new Profile(profileFields).save();
                res.json(newProfile);
            }
        } catch (error) {
            res.status(404).json(error);
        }
    },
    addExperience: async (req, res, next) => {
        const errors = {};
        const { title, company,
            location, from, to,
            current, description } = req.body;
        const newExperience = {
            title,
            company,
            location,
            from,
            to,
            current,
            description
        };
        try {
            const profile = await Profile.findOne({ user: req.user._id });
            profile.experience.unshift(newExperience);
            const updateProfile = await profile.save();
            res.json(updateProfile);
        } catch (error) {
            res.status(404).json(error);
        }
    },
    addEducation: async (req, res, next) => {
        const errors = {};
        const { school, degree,
            fieldofstudy, from, to,
            current, description } = req.body;
        const newEducation = {
            school,
            degree,
            fieldofstudy,
            from,
            to,
            current,
            description
        };
        try {
            const profile = await Profile.findOne({ user: req.user._id });
            profile.education.unshift(newEducation);
            const updateProfile = await profile.save();
            res.json(updateProfile);
        } catch (error) {
            res.status(404).json(error);
        }
    }
}