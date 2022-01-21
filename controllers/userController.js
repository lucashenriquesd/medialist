const bcrypt = require('bcrypt');
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
    const user = await User.findOne({ where: { uuid: req.params.uuid } });

    if (user === null) {
        await res.status(404).send({ "msg": `User ${req.params.uuid} not found` });
        return;
    }

    res.send(user);
};

exports.store = async function(req, res) {
    const user = await User.create(req.body);
    res.send({ "msg": `User ${req.body.name} created` });
};

exports.update = async function(req, res) {
    const { name, nickName } = req.body;
    const user = await User.findOne({ where: { uuid: req.params.uuid } });

    if (user === null) {
        await res.status(404).send({ "msg": `User ${req.params.uuid} not found` });
        return;
    }
    user.set({
        name: name,
        nickName: nickName
    });

    await user.save();
    res.setHeader('Content-Type', 'application/json');
    res.send({ "msg": `User ${req.params.uuid} updated` });
};

exports.delete = async function(req, res) {
    const user = await User.findOne({ where: { uuid: req.params.uuid } });

    if (user === null) {
        await res.status(404).send({ "msg": `User ${req.params.uuid} not found` });
        return;
    }

    await user.destroy();
    res.setHeader('Content-Type', 'application/json');
    res.send({ "msg": `User ${req.params.uuid} deleted` });
};

exports.login = async function(req, res) {
    const user = await User.findOne({ where: { email: req.body.email } });

    if (user) {
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (validPassword) {
            res.status(200).json({ message: "Login successful" });
            return;
        }

        res.status(400).json({ error: "Login failed" });
        return;
    }

    res.status(400).json({ error: "Login failed" });
};