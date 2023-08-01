module.exports = ({locationsDb, Joi}) => {
  return async ({username}) => {
    validateInput({username});

    return await locationsDb.getLocationsByUsername({username});
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
