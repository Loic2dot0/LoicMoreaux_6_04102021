const User = require('../models/User');

exports.signup = (req, res, next) => {
    res.json({ message: 'Create User'});
};

exports.login = (req, res, next) => {
    res.json({ message: 'Log User'});
};