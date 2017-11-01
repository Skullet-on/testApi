module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Flights', [{
      number: 511,
      scheduledTime: '11:30',
      destination: 'Moscow',
      gate: 5,
      remark: "Delayed"
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Flights', null, {});
  }
};
