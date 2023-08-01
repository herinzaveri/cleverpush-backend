
module.exports = ({getLocationsByUsername, Joi}) => {
  return async (req, res) => {
    try {
      const username = req.user.username;

      validateInput({username});

      const response = await getLocationsByUsername({username});

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

  function validateInput({username}) {
    const schema = Joi.object({
      username: Joi.string().required(),
    });

    const {error} = schema.validate({username});
    if (error) {
      throw new Error(error.message);
    }
  }
};
