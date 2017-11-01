module.exports = (sequelize, DataTypes) => {
  const Airline = sequelize.define('Airline', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Airline;
};