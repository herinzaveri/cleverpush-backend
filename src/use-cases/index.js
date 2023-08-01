const Joi = require('joi');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const config = require('../config');

// import all DBs
const db = require('../data-access');

// import all use cases
const makeEncryptText = require('./encrypt-text');
const makeDecryptText = require('./decrypt-text');
const makeSignup = require('./signup');
const makeLogin = require('./login');
const makeVerifyUser = require('./verify-user');
const makeAddLocation = require('./add-location');
const makeGetLocationsByUsername = require('./get-locations-by-username');

// make all use cases
const encryptText = makeEncryptText({crypto, config, Joi});
const decryptText = makeDecryptText({crypto, config, Joi});
const signup = makeSignup({encryptText, usersDb: db.usersDb, jwt, config, Joi});
const login = makeLogin({encryptText, usersDb: db.usersDb, jwt, config, Joi});
const verifyUser = makeVerifyUser({jwt, config, Joi});
const addLocation = makeAddLocation({locationsDb: db.locationsDb, Joi});
const getLocationsByUsername = makeGetLocationsByUsername({locationsDb: db.locationsDb, Joi});

// export all use cases
module.exports = Object.freeze({
  encryptText,
  decryptText,
  signup,
  login,
  verifyUser,
  addLocation,
  getLocationsByUsername,
});
