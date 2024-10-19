const Joi = require("joi");


const validator = (schema) => (payload) =>
    schema.validate(payload , {abortEarly: false});


const signupSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    // password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30$}')).required()
    password: Joi.string().min(5).max(10).required()
    // .error(new Error('It is whatever error'))
});

exports.validateSignup = validator(signupSchema);