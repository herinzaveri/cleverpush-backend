module.exports = ({login, Joi}) => {
  return async (req, res) => {
    try {
      const {username, password} = req.body;

      validateInput({username, password});

      const response = await login({username, password});

      res.formatResponse({
        contentType: 'application/json',
        statusCode: 200,
        body: response,
      });
    } catch (error) {
      console.error(error);
      res.formatError({error});
    }
  };

  function validateInput({username, password}) {
    const schema = Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required(),
    });

    const {error} = schema.validate({username, password});
    if (error) {
      throw new Error(error.message);
    }
  }
};
