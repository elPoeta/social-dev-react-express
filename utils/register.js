const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = validateRegisterInput = (req, res, next) => {
    let errors = {};
    const data = req.body
    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.confirmPassword = !isEmpty(data.confirmPassword) ? data.confirmPassword : '';

    if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
        errors.name = 'Name must be between 2 and 30 characters';
    }

    if (Validator.isEmpty(data.name)) {
        errors.name = 'Name field is required';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
    }

    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = 'Password must be at least 6 characters';
    }

    if (Validator.isEmpty(data.confirmPassword)) {
        errors.confirmPassword = 'Confirm Password field is required';
    }

    if (!Validator.equals(data.password, data.confirmPassword)) {
        errors.confirmPassword = 'Passwords must match';
    }
    if (!isEmpty(errors)) {
        return res.status(400).json(errors);
    }
    next();
};