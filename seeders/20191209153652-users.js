module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Thomas',
      lastName: 'Kang',
      email: 'tk@gmail.com',
      password_digest: 'Password1',
      username: 'tom',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'M.K.',
      lastName: 'Irvine',
      email: 'mk@gmail.com',
      password_digest: 'Password1',
      username: 'mk',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Chris',
      lastName: 'Abrams',
      email: 'ca@gmail.com',
      password_digest: 'Password1',
      username: 'chris',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};