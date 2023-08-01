module.exports = ({addLocation, Joi}) => {
  return async (req, res) => {
    try {
      const username = req.user.username;
      const {name, description, latitude, longitude} = req.body;

      validateInput({name, description, latitude, longitude, username});

      const response = await addLocation({name, description, latitude, longitude, username});

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

  function validateInput({name, description, latitude, longitude, username}) {
    const schema = Joi.object({
      name: Joi.string().required(),
      description: Joi.string().required(),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      username: Joi.string().required(),
    });

    const {error} = schema.validate({name, description, latitude, longitude, username});
    if (error) {
      throw new Error(error.message);
    }
  }
};
