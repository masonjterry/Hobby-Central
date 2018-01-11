// module/constructor  for creating the user table
module.exports = function(sequelize, DataTypes){
  var User = sequelize.define("User", {
    firstName: DataTypes.STRING,
    lastName:  DataTypes.STRING,
    email:     DataTypes.STRING,
    username:  DataTypes.STRING,
    password:  DataTypes.STRING
  });

  return User;
}
