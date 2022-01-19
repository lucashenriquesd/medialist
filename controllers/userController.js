const { User } = require('../models');

exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: get all users');
};

exports.store = function(req, res) {
    const user = User.create(req.body);
    res.send(`User ${req.body.name} created`);
};