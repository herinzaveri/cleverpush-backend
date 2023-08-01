module.exports = ({db, User}) => {
  return Object.freeze({
    getUserByUsername,
    addNewUser,
  });

  async function getUserByUsername({username}) {
    await db.connect();

    const user = await User.find({username});

    return user[0];
  }

  async function addNewUser({name, username, password}) {
    await db.connect();

    const user = new User({name, username, password});

    return await user.save();
  }
};
