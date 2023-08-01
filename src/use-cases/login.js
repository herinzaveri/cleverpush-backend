module.exports = ({encryptText, usersDb, jwt, config, Joi}) => {
  return async ({username, password}) => {
    validateInput({username, password});

    const user = await usersDb.getUserByUsername({username});

    const encryptedPassword = await encryptText({text: password});

    if (user && user.password === encryptedPassword) {
      const payload = user.toJSON();
      delete payload.password;

      const token = jwt.sign(payload, config.privateKey);

      return {token};
    }

    throw new Error('Invalid username or password');
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
