const User = require('../models/User');
const gravatar = require('gravatar');
const { JWT_SECRET } = require('../config/keys');
const JWT = require('jsonwebtoken');

signToken = user => {
    console.log('sign/> ', user);
    return JWT.sign({
        iss: 'ElPoeta',
        sub: user.id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 1)
    }, JWT_SECRET);
}
module.exports = {
    register: async (req, res, next) => {
        const errors = {};
        const { name, email, password, confirmPassword } = req.body;
        if (password !== confirmPassword) {
            return res.status(403).json(errors.password = 'Password and confirm password not equals');
        }
        const avatar = gravatar.url(email, { s: '200', r: 'pg', d: 'mm' });

        const foundUser = await User.findOne({ email });
        if (foundUser) {
            return res.status(403).json(errors.email = 'Email is already in use');
        }

        const newUser = new User({
            name,
            email,
            password,
            avatar
        });

        await newUser.save();

        const token = `Bearer ${signToken(newUser)}`;

        res.status(200).json(
            {
                user:
                {
                    id: newUser._id,
                    name: newUser.name,
                    avatar: newUser.avatar,
                    jwt: token
                }
            });
    },
    login: async (req, res, next) => {
        console.log('reUSER > ', req.user)
        const token = `Bearer ${signToken(req.user)}`;
        console.log('token :: ', token)
        const { id, name, email, avatar } = req.user;
        res.status(200).json(
            {
                user:
                {
                    id,
                    email,
                    name,
                    avatar,
                    jwt: token
                }
            });
    }
}
