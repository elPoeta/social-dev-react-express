const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = validatePostInput = (req, res, next) => {
    let errors = {};
    const data = req.body;


    data.body = !isEmpty(data.body) ? data.body : "";


    if (!Validator.isLength(data.body, { min: 10, max: 200 })) {
        errors.body = "Body needs to between 10 and 200 characters";
    }


    if (Validator.isEmpty(data.body)) {
        errors.body = "Body field is required";
    }


    if (!isEmpty(errors)) {
        return res.status(400).json(errors);
    }
    next();
};
