const jwt = require('jsonwebtoken');

const config = require('../config');

// import all middlewares
const makeFormatting = require('./formatting');
const makeIsValidUser = require('./is-valid-user');

// make all middlewares
const formatting = makeFormatting();
const isValidUser = makeIsValidUser({jwt, config});

// export all middlewares
module.exports = Object.freeze({
  formatting,
  isValidUser,
});
