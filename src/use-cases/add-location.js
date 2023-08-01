module.exports = ({locationsDb, Joi}) => {
  return async ({name, description, latitude, longitude, username}) => {
    validateInput({name, description, latitude, longitude, username});

    return await locationsDb.addNewLocation({name, description, latitude, longitude, username});
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
