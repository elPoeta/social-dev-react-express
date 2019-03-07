const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = validateExperienceInput = (req, res, next) => {
    let errors = {};
    const data = req.body;
    data.title = !isEmpty(data.title) ? data.title : '';
    data.company = !isEmpty(data.company) ? data.company : '';
    data.from = !isEmpty(data.from) ? data.from : '';

    if (Validator.isEmpty(data.title)) {
        errors.title = 'Job title field is required';
    }

    if (Validator.isEmpty(data.company)) {
        errors.company = 'Company field is required';
    }

    if (Validator.isEmpty(data.from)) {
        errors.from = 'From date field is required';
    }

    if (!isEmpty(errors)) {
        return res.status(400).json(errors);
    }
    next();
};