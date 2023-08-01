const express = require('express');
const router = express.Router();

const controllers = require('./controllers');
const middlewares = require('./middlewares');

router.post('/auth/signup', controllers.signupAction);
router.post('/auth/login', controllers.loginAction);
router.post('/auth/verify-user', controllers.verifyUserAction);
router.post('/locations', [middlewares.isValidUser], controllers.addLocationAction);
router.get('/locations', [middlewares.isValidUser], controllers.getLocationsByUsernameAction);

module.exports = router;
