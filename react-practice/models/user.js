const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true
      },
      unique: true
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
}
    
  User.associate = models => {
    User.hasMany(models.User_Shift, {
      onDelete: "SET NULL"
    });
  };

  User.prototype.getFullName = function getFullLegalName() {
    return `${this.firstName} ${this.lastName}`;
  };
  User.prototype.authenticate = function authenticate(password) {
    return bcrypt.compare(password, this.password).then(res => res);
  };
  return User;
};
