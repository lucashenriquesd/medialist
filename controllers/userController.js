const { User } = require('../models');

exports.index = async function(req, res) {
    const users = await User.findAll();

    if (users === null) {
        await res.status(404).send({ "msg": `No User found` });
        return;
    }

    res.send(users);
};

exports.show = async function(req, res) {
    const id = parseInt(req.params.id);
    const user = await User.findByPk(id);

    if (user === null) {
        await res.status(404).send({ "msg": `User ${id} not found` });
        return;
    }

    res.send(JSON.stringify(user, null, 2));
};

exports.update = async function(req, res) {
    const id = parseInt(req.params.id);
    const { name, nickName } = req.body;
    const user = await User.findByPk(id);

    if (user === null) {
        await res.status(404).send({ "msg": `User ${id} not found` });
        return;
    }
    user.set({
        name: name,
        nickName: nickName
    });

    await user.save();
    res.setHeader('Content-Type', 'application/json');
    res.send({ "msg": `User ${id} updated` });
};

exports.delete = async function(req, res) {
    const id = parseInt(req.params.id);
    const user = await User.findByPk(id);

    if (user === null) {
        await res.status(404).send({ "msg": `User ${id} not found` });
        return;
    }

    await user.destroy();
    res.setHeader('Content-Type', 'application/json');
    res.send({ "msg": `User ${id} deleted` });
};

exports.store = async function(req, res) {
    const user = await User.create(req.body);
    res.send({ "msg": `User ${req.body.name} created` });
};