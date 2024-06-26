const Joi = require('joi');

const login = {
  body: Joi.object().keys({
    // user_id: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required()
  }),
};

const otp = {
  body: Joi.object().keys({
    email: Joi.string().required(),
  }),
};

const reset = {
  body: Joi.object().keys({
    otp: Joi.string().required(),
    newPassword: Joi.string().required(),
    confirmPassword: Joi.string().required(),
  }),
};


const signUp = {
  body: Joi.object().keys({
    email: Joi.string().required(),
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    phone: Joi.string().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().required(),
  }),
};

const courierlogin = {
  body: Joi.object().keys({
    email: Joi.string().required(),
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    companyname: Joi.string().required(),
    licenseplate: Joi.string().required(),
    vehiclemodel: Joi.string().required(),
    phone: Joi.string().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().required(),
  }),
};


module.exports = { courierlogin, login, otp, reset, signUp };

