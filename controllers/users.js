const User =  require('../models/user');

module.exports = {
    newUser: async (req,res,next) => {
        const newUser =  new User(req.body);
        const user = await newUser.save();
        res.status(201).json(user);
    },

    getUser: async (req,res,next) => {
        const { userId } = req.params;
        const user = await User.findById(userId);
        res.status(200).json(user);    }

}