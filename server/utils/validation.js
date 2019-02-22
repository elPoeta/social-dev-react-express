const Joi = require('joi');

module.exports = {
    validateBody: (schema) => (req, res, next) => {
        const result = Joi.validate(req.body, schema);
        if (result.error) {
            return res.status(400).json(result.error);
        }

        if (!req.value) { req.value = {}; }
        req.value['body'] = result.value;
        next();
    },

    schemas: {
        registerSchema: Joi.object().keys({
            name: Joi.string().min(2).max(25).required(),
            email: Joi.string().email({ minDomainAtoms: 2 }).required(),
            password: Joi.string().min(8).required()
        }),
        loginSchema: Joi.object().keys({
            email: Joi.string().email({ minDomainAtoms: 2 }).required(),
            password: Joi.string().required()
        })
    }
}