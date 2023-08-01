const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema(
    {
      name: {
        type: String,
      },
      description: {
        type: String,
      },
      latitude: {
        type: Number,
      },
      longitude: {
        type: Number,
      },
      username: {
        type: String,
      },
    },
    {
      timestamps: true,
    },
);

const Location =
  mongoose.models.locations || mongoose.model('locations', LocationSchema);

module.exports = {Location};
