const {User} = require('../../../../models');

module.exports = async (req,res) => {
  const user = await User.findByPk(req.params.id);

  if (!user) {
    return res.status(404).json({message: 'User not found'});
  }

  return res.json(user);
};