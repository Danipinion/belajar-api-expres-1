const {User} = require('../../../models');

// Create a user data
module.exports = async (req, res, next) => {
  const body = req.body;
  if(!body.name || !body.email) return res.status(500).json({error: 'name or email is required'});

  const user = await User.create(body)
  return res.json(user);
}