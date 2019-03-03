const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = validatePostInput = (req, res, next) => {
    let errors = {};
    const data = req.body;


    data.title = !isEmpty(data.tirle) ? data.title : "";
    data.body = !isEmpty(data.body) ? data.body : "";

    if (!Validator.isLength(data.title, { min: 10, max: 50 })) {
        errors.title = "Title needs to between 10 and 50 characters";
    }

    if (!Validator.isLength(data.body, { min: 10 })) {
        errors.body = "Body needs min 10 characters";
    }

    if (Validator.isEmpty(data.title)) {
        errors.title = "Title field is required";
    }

    if (Validator.isEmpty(data.body)) {
        errors.body = "Body field is required";
    }


    if (!isEmpty(errors)) {
        return res.status(400).json(errors);
    }
    next();
};
