const Profile = require('../models/Profile');
const User = require('../models/User');

module.exports = {
    getProfile: async (req, res, next) => {
        const errors = {};
        try {
            const profile = await Profile
                .findOne({ user: req.user.id })
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
    getProfileUsername: async (req, res, next) => {
        const errors = {};
        const { username } = req.params;
        try {
            const profile = await Profile
                .findOne({ username })
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
        const user = req.user.id
        const { username, company, website, location,
            status, bio, githubuser, skills, social } = req.body;
        const profileFields = {};
        profileFields.user = user;


        if (username) profileFields.username = username;
        if (company) profileFields.company = company;
        if (website) profileFields.website = website;
        if (location) profileFields.location = location;
        if (status) profileFields.status = status;
        if (bio) profileFields.bio = bio;
        if (githubuser) profileFields.githubuser = githubuser;
        if (typeof skills !== 'undefined') profileFields.skills = skills.split(',');
        if (social) profileFields.social = social;

        try {
            const profile = await Profile.findOne({ user });
            console.log('### ', profile);
            if (profile) {
                const updateProfile = await Profile
                    .findOneAndUpdate(
                        { user },
                        { $set: profileFields },
                        { new: true });
                res.json(updateProfile);
            } else {
                const profile = await Profile.findOne({ username });
                if (profile) {
                    errors.username = 'That handle already exists';
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
            const profile = await Profile.findOne({ user: req.user.id });
            profile.experience = [...profile.experience, newExperience];
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
            const profile = await Profile.findOne({ user: req.user.id });
            profile.education = [...profile.education, newEducation];
            const updateProfile = await profile.save();
            res.json(updateProfile);
        } catch (error) {
            res.status(404).json(error);
        }
    },
    deleteProfile: async (req, res, next) => {
        const errors = {};
        try {
            const profile = await Profile.findOneAndRemove({ user: req.user.id });
            if (!profile) {
                error.noProfile = 'Profile not found';
                return res.json(errors);
            }
            const user = await User.findOneAndRemove({ _id: req.user.id });
            if (!user) {
                error.noUser = 'User not found';
                return res.json(errors);
            }
            res.json({ success: true })
        } catch (error) {
            res.status(404).json(error);
        }
    },
    deleteExperience: async (req, res, next) => {
        const errors = {};
        const exp_id = req.params.exp_id;
        try {
            const profile = await Profile.findOne({ user: req.user.id });
            if (!profile) {
                error.noProfile = 'Profile not found';
                return res.json(errors);
            }
            profile.experience = [...profile.experience.filter(p => p._id.toString() !== exp_id)];

            await profile.save();
            res.json(profile);

        } catch (error) {
            res.status(404).json(error);
        }
    },
    deleteEducation: async (req, res, next) => {
        const errors = {};
        const edu_id = req.params.edu_id;
        try {
            const profile = await Profile.findOne({ user: req.user.id });
            if (!profile) {
                error.noProfile = 'Profile not found';
                return res.json(errors);
            }
            profile.education = [...profile.education.filter(p => p._id.toString() !== edu_id)];

            await profile.save();
            res.json(profile);

        } catch (error) {
            res.status(404).json(error);
        }
    }
}