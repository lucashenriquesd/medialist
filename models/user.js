'use strict';

require('dotenv').config();
const bcrypt = require('bcrypt');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  User.init({
    name: DataTypes.STRING,
    nickName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    }
  }, {
    sequelize,
    modelName: 'User'
  });

  User.beforeCreate((user, options) => {
    return bcrypt.hash(user.password, parseInt(process.env.SALT_ROUNDS))
        .then(hash => {
            user.password = hash;
        })
        .catch(err => { 
            throw new Error(); 
        });
  });

  return User;
};