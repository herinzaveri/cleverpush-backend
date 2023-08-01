module.exports = ({crypto, config, Joi}) => {
  return async ({text}) => {
    validateInput({text});

    const cipher = crypto.createCipheriv(
        config.cryptoAlgorithm,
        config.cryptoKey,
        Buffer.from(config.cryptoIV, 'hex'),
    );

    const encryptedText = cipher.update(text, 'utf8', 'hex') + cipher.final('hex');

    return encryptedText;
  };

  function validateInput({text}) {
    const schema = Joi.object({
      text: Joi.string().required(),
    });

    const {error} = schema.validate({text});
    if (error) {
      throw new Error(error.message);
    }
  }
};
