const mongoose = require('mongoose');

const config = require('../config');

// initializing connection
class DB {
  constructor() {
    this.connection = {};
    this.isReady = false;
  }

  async connect() {
    if (this.connection.readyState) {
      return this.connection;
    }

    const db = await mongoose.connect(config.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    this.connection = db.connections[0];
    this.isReady = this.connection.readyState;
    console.log(`connetion is ${this.connection.readyState}`);

    return this.connection;
  }
}

const db = new DB();

// import all models
const {User} = require('./models/user.model');
const {Location} = require('./models/location.model');

// import and make all DBs
const makeUsersDb = require('./users.db');
const usersDb = makeUsersDb({db, User});

const makeLocationsDb = require('./locations.db');
const locationsDb = makeLocationsDb({db, Location});

module.exports = Object.freeze({
  usersDb,
  locationsDb,
});
