const User = require("../models/User");
const gravatar = require("gravatar");
const { JWT_SECRET } = require("../config/keys");
const JWT = require("jsonwebtoken");

signToken = user => {
  return JWT.sign(
    {
      id: user.id,
      name: user.name,
      avatar: user.avatar,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 1)
    },
    JWT_SECRET
  );
};
module.exports = {
  register: async (req, res, next) => {
    const errors = {};
    const { name, email, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
      return res
        .status(403)
        .json((errors.password = "Password and confirm password not equals"));
    }
    const avatar = gravatar.url(email, { s: "200", r: "pg", d: "mm" });

    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return res.status(403).json((errors.email = "Email is already in use"));
    }

    const newUser = new User({
      name,
      email,
      password,
      avatar
    });

    await newUser.save();

    const token = `Bearer ${signToken(newUser)}`;

    res.status(200).json({ token });
  },
  login: async (req, res, next) => {
    const token = `Bearer ${signToken(req.user)}`;
    res.status(200).json({ token });
  }
};
