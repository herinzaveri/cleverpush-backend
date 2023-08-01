module.exports = ({jwt, config}) => {
  return async (req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1];

      const user = jwt.verify(token, config.privateKey);

      if (user && user.username) {
        req.user = user;
        return next();
      }
    } catch (e) {
      return await res.formatResponse({
        contentType: 'application/json',
        statusCode: 403,
        body: {message: 'You are not authorized'},
      });
    }

    return await res.formatResponse({
      contentType: 'application/json',
      statusCode: 403,
      body: {message: 'You are not authorized'},
    });
  };
};
