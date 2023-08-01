module.exports = ({encryptText, usersDb, jwt, config, Joi}) => {
  return async ({name, username, password}) => {
    validateInput({name, username, password});

    const user = await usersDb.getUserByUsername({username});

    if (user) {
      throw new Error('User already exists');
    }

    const encryptedPassword = await encryptText({text: password});

    const newUser = await usersDb.addNewUser({name, username, password: encryptedPassword});
    const payload = newUser.toJSON();
    delete payload.password;

    const token = jwt.sign(payload, config.privateKey);

    return {token};
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
