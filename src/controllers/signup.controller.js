module.exports = ({signup, Joi}) => {
  return async (req, res) => {
    try {
      const {name, username, password} = req.body;

      validateInput({name, username, password});

      const response = await signup({name, username, password});

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

  function validateInput({name, username, password}) {
    const schema = Joi.object({
      name: Joi.string().required(),
      username: Joi.string().required(),
      password: Joi.string().required(),
    });

    const {error} = schema.validate({name, username, password});
    if (error) {
      throw new Error(error.message);
    }
  }
};
