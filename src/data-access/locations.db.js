module.exports = ({db, Location}) => {
  return Object.freeze({
    addNewLocation,
    getLocationsByUsername,
  });
  async function addNewLocation({name, description, latitude, longitude, username}) {
    await db.connect();

    const location = new Location({name, description, latitude, longitude, username});

    return await location.save();
  }

  async function getLocationsByUsername({username}) {
    await db.connect();

    const locations = await Location.find({username});

    return locations;
  }
};
