const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = validateProfileInput = (req, res, next) => {
    let errors = {};
    const data = req.body;
    data.handle = !isEmpty(data.handle) ? data.handle : '';
    data.status = !isEmpty(data.status) ? data.status : '';
    data.skills = !isEmpty(data.skills) ? data.skills : '';

    if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
        errors.handle = 'Handle needs to between 2 and 4 characters';
    }

    if (Validator.isEmpty(data.handle)) {
        errors.handle = 'Profile handle is required';
    }

    if (Validator.isEmpty(data.status)) {
        errors.status = 'Status field is required';
    }

    if (Validator.isEmpty(data.skills)) {
        errors.skills = 'Skills field is required';
    }

    if (!isEmpty(data.website)) {
        if (!Validator.isURL(data.website)) {
            errors.website = 'Not a valid URL';
        }
    }

    if (!isEmpty(data.youtube)) {
        if (!Validator.isURL(data.youtube)) {
            errors.youtube = 'Not a valid URL';
        }
    }

    if (!isEmpty(data.twitter)) {
        if (!Validator.isURL(data.twitter)) {
            errors.twitter = 'Not a valid URL';
        }
    }

    if (!isEmpty(data.facebook)) {
        if (!Validator.isURL(data.facebook)) {
            errors.facebook = 'Not a valid URL';
        }
    }

    if (!isEmpty(data.linkedin)) {
        if (!Validator.isURL(data.linkedin)) {
            errors.linkedin = 'Not a valid URL';
        }
    }


    if (!isEmpty(errors)) {
        return res.status(400).json(errors);
    }
    next();
};