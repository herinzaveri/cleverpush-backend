const config = {
  PORT: process.env.NODE_PORT || 5100,
  mongoURI: 'mongodb+srv://herin:herin@cluster0.eamufxc.mongodb.net/CleverPush?retryWrites=true&w=majority',
  privateKey: 'aSecretKey',
  cryptoAlgorithm: 'aes-256-cbc',
  cryptoKey: '9994f62b72537de3a922a12c40180ab3',
  cryptoIV: '516d68fe87c4bb4397ef89d2a3381f41',
};

module.exports = config;
