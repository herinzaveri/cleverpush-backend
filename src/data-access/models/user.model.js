const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
      name: {
        type: String,
      },
      username: {
        type: String,
      },
      password: {
        type: String,
      },
    },
    {
      timestamps: true,
    },
);

const User =
  mongoose.models.users || mongoose.model('users', UserSchema);

module.exports = {User};
