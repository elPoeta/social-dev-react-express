const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = validateLoginInput = (req, res, next) => {
    let errors = {};

    const data = req.body;

    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
    }
    if (!isEmpty(errors)) {
        return res.status(400).json(errors);
    }
    if (!isEmpty(errors)) {
        return res.status(400).json(errors);
    }
    next();

};