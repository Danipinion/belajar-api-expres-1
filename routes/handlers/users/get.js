const {User} = require('../../../models');

//Get all users data
module.exports = async (req, res) => {
  // try {
  //   const users = await User.findAll();
  //   res.json(users);
  // } catch (err) {
  //   res.status(500).json({err});
  // }
  const users = await User.findAll();
  res.json(users);
};