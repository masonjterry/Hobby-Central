// Hobby database instance call, DB Hobbies table Constructor /creator
module.exports = function(sequelize, DataTypes){
  var Hobby = sequelize.define("Hobbies", {
    category:     DataTypes.STRING,
    name:         DataTypes.STRING,
    user:         DataTypes.STRING,
    materials:    DataTypes.TEXT,
    instructions: DataTypes.TEXT,
    images:       DataTypes.STRING,
    videos:       DataTypes.STRING
  });

  return Hobby;
}
