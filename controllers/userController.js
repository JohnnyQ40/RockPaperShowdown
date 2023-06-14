const User = require('../models/user');

const userController = {

    async register(req, res) {
        try {
            const newUser = await User.create(req.body);
            req.session.user_id = newUser.id;
            req.session.logged_in = true;
            res.status(200).json(newUser);
        } catch (err) {
            res.status(400).json(err);
        }
    },

    async login(req, res) {
        try {
            const user = await User.findOne({ where: { email: req.body.email} });
            if (!user) {
                res.status(400).json({ message: 'no user account found!'});
                return;
            }
            const validPassword = user.checkPassword(req.body.password);
            if (!validPassword) {
                res.status(400).json({ message: 'Incorrect password'});
                return;
            }
            req.session.user_id = user.id;
            req.session.loggin_in = true;
            res.json({ user, message: 'You are now logged in!'});
        } catch (err) {
            res.status(400).json(err);
        }
    },
};

module.exports = userController;