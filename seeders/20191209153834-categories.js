module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [{
      title: 'RPG',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Sports',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'FPS',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};