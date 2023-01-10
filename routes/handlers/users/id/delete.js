const {User} = require('../../../../models');

module.exports = async (req, res) => {
    const user = await User.findByPk(req.params.id);

    if (!user) {
        return res.status(404).send({
            message: 'User not found'
        });
    }
    
    await user.destroy();

    return res.json({
      message: 'User deleted'
    });
}