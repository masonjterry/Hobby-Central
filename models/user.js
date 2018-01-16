module.exports = function(sequelize, DataTypes){
  var User = sequelize.define("User", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    liked: DataTypes.STRING
  });

  return User;
}
