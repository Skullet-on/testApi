module.exports = (sequelize, DataTypes) => {
  const Flight = sequelize.define('Flight', {
    number: DataTypes.STRING,
    scheduledTime: DataTypes.TIME,
    destination: DataTypes.STRING,
    gate: DataTypes.INTEGER,
    remark: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Flight;
};