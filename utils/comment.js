const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = validatePostInput = (req, res, next) => {
    let errors = {};
    const data = req.body;


    data.body = !isEmpty(data.body) ? data.body : "";


    if (!Validator.isLength(data.body, { min: 15 })) {
        errors.body = "Body needs 10 or more characters";
    }


    if (Validator.isEmpty(data.body)) {
        errors.body = "Body field is required";
    }


    if (!isEmpty(errors)) {
        return res.status(400).json(errors);
    }
    next();
};
