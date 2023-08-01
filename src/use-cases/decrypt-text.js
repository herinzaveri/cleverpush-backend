module.exports = ({crypto, config, Joi}) => {
  return async ({text}) => {
    validateInput({text});

    const decipher = crypto.createDecipheriv(
        config.cryptoAlgorithm,
        config.cryptoKey,
        Buffer.from(config.cryptoIV, 'hex'),
    );

    const decryptedText = decipher.update(text, 'hex', 'utf8') + decipher.final('utf8');

    return decryptedText;
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
