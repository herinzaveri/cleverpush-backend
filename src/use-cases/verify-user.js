module.exports = ({jwt, config, Joi}) => {
  return async ({accessToken}) => {
    validateInput({accessToken});

    try {
      const user = jwt.verify(accessToken, config.privateKey);

      return user;
    } catch (e) {
      throw new Error('You are Unauthorized');
    }
  };

  function validateInput({accessToken}) {
    const schema = Joi.object({
      accessToken: Joi.string().required(),
    });

    const {error} = schema.validate({accessToken});
    if (error) {
      throw new Error(error.message);
    }
  }
};
