module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Favorites', [{
      userId: 1,
      gameId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      gameId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 3,
      gameId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 4,
      gameId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 5,
      gameId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      gameId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      gameId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Favorites', null, {});
  }
};