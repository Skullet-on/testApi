module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Airlines', [
    {
      name: 'Belavia'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Airlines', null, {});
  }
};
