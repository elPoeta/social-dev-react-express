const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = validateProfileInput = (req, res, next) => {
  let errors = {};
  const data = req.body;

  if (Array.isArray(data.skills)) {
    data.skills = data.skills.join(',');
  }
  data.username = !isEmpty(data.username) ? data.username : "";
  data.status = !isEmpty(data.status) ? data.status : "";
  data.skills = !isEmpty(data.skills) ? data.skills : "";

  if (!Validator.isLength(data.username, { min: 2, max: 40 })) {
    errors.username = "Username needs to between 2 and 4 characters";
  }

  if (Validator.isEmpty(data.username)) {
    errors.username = "Profile username is required";
  }

  if (Validator.isEmpty(data.status)) {
    errors.status = "Status field is required";
  }

  if (Validator.isEmpty(data.skills)) {
    errors.skills = "Skills field is required";
  }

  if (!isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errors.website = "Not a valid URL";
    }
  }

  if (!isEmpty(data.social.youtube)) {
    if (!Validator.isURL(data.social.youtube)) {
      errors.youtube = "Not a valid URL";
    }
  }

  if (!isEmpty(data.social.twitter)) {
    if (!Validator.isURL(data.social.twitter)) {
      errors.twitter = "Not a valid URL";
    }
  }

  if (!isEmpty(data.social.facebook)) {
    if (!Validator.isURL(data.social.facebook)) {
      errors.facebook = "Not a valid URL";
    }
  }

  if (!isEmpty(data.social.linkedin)) {
    if (!Validator.isURL(data.social.linkedin)) {
      errors.linkedin = "Not a valid URL";
    }
  }

  if (!isEmpty(errors)) {
    return res.status(400).json(errors);
  }
  next();
};
