module.exports = ({verifyUser, Joi}) => {
  return async (req, res) => {
    try {
      const {accessToken} = req.body;

      validateInput({accessToken});

      const response = await verifyUser({accessToken});

      res.formatResponse({
        contentType: 'application/json',
        statusCode: 200,
        body: response,
      });
    } catch (error) {
      res.formatError({error});
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
