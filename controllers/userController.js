const { User } = require('../models');

exports.index = async function(req, res) {
    const users = await User.findAll();
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(users, null, 2));
};

exports.show = async function(req, res) {
    const id = parseInt(req.params.id);
    const user = await User.findByPk(id);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(user, null, 2));
};

exports.update = async function(req, res) {
    const id = parseInt(req.params.id);
    const { name, nickName } = req.body;
    const user = await User.findByPk(id);
    user.set({
        name: name,
        nickName: nickName
    });

    await user.save();
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ "msg": `User ${req.params.id} updated` }, null, 2));
};

exports.store = async function(req, res) {
    const user = await User.create(req.body);
    res.send(`User ${req.body.name} created`);
};