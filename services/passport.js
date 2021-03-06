const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const { JWT_SECRET } = require('../config/keys');
const User = require('../models/User');

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET
}
passport.use(new JwtStrategy(jwtOptions, async (payload, done) => {
    try {
        const user = await User.findById(payload.id);

        if (!user) {
            return done(null, false);
        }

        done(null, user);
    } catch (error) {
        done(error, false);
    }
}));

passport.use(new LocalStrategy({
    usernameField: 'email'
}, async (email, password, done) => {

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return done(null, false);
        }

        const isMatch = await user.isValidPassword(password);

        if (!isMatch) {
            return done(null, false);
        }

        done(null, user);
    } catch (error) {
        done(error, false);
    }
}));
