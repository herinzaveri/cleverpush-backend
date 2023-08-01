const Joi = require('joi');

// import all use cases
const useCases = require('../use-cases');

// import all actions
const makeSignupAction = require('./signup.controller');
const makeLoginAction = require('./login.controller');
const makeVerifyUserAction = require('./verify-user.controller');
const makeAddLocationAction = require('./add-location.controller');
const makeGetLocationsByUsernameAction = require('./get-locations-by-username.controller');

// make all actions
const signupAction = makeSignupAction({signup: useCases.signup, Joi});
const loginAction = makeLoginAction({login: useCases.login, Joi});
const verifyUserAction = makeVerifyUserAction({verifyUser: useCases.verifyUser, Joi});
const addLocationAction = makeAddLocationAction({addLocation: useCases.addLocation, Joi});
const getLocationsByUsernameAction = makeGetLocationsByUsernameAction({
  getLocationsByUsername: useCases.getLocationsByUsername,
  Joi,
});

// export all actions
module.exports = Object.freeze({
  signupAction,
  loginAction,
  verifyUserAction,
  addLocationAction,
  getLocationsByUsernameAction,
});
