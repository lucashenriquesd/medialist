const { User } = require('../models');

exports.index = async function(req, res) {
    const users = await User.findAll();
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(users, null, 2));
};

exports.store = async function(req, res) {
    const user = await User.create(req.body);
    res.send(`User ${req.body.name} created`);
};