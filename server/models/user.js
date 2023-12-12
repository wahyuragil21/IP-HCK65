'use strict';
const {
  Model
} = require('sequelize');
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
    fullName: {
      type : DataTypes.STRING,
      allowNull : false,
      validate: {
        notEmpty : {
          msg : 'Name is required'
        },
        notNull : {
          msg : 'Name is not required'
        }
      }
    },
    address: {
      type : DataTypes.STRING,
      allowNull : false,
      validate: {
        notEmpty : {
          msg : 'Address is required'
        },
        notNull : {
          msg : 'Address is not required'
        }
      }
    },
    phoneNumber: {
      type : DataTypes.STRING,
      allowNull : false,
      validate: {
        notEmpty : {
          msg : ' Phone number is required'
        },
        notNull : {
          msg : 'Phone number is not required'
        }
      }
    },
    email: {
      type : DataTypes.STRING,
      allowNull : true,
      isunique : {
        msg : 'Email is already exist'
      },
      validate: {
        notEmpty : {
          msg : 'Email is required'
        },
        notNull : {
          msg : 'Email is not required'
        }
      }
    },
    password: {
      type : DataTypes.STRING,
      allowNull : false,
      validate: {
        notEmpty : {
          msg : 'Password is required'
        },
        notNull : {
          msg : 'Password is not required'
        }
      }
    }
  }, {
    hooks :{
      beforeCreate : (user, options) => {
        user.password = hasPassword(user.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};