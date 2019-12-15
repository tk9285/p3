module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Games', [{
      title: 'Super Mario',
      categoryId: '1',
      url: 'https://www.mobygames.com/images/covers/l/310078-the-legend-of-zelda-majora-s-mask-3d-nintendo-3ds-front-cover.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Zelda',
      categoryId: '1',
      url: 'https://www.mobygames.com/images/covers/l/310078-the-legend-of-zelda-majora-s-mask-3d-nintendo-3ds-front-cover.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Game Test',
      categoryId: '1',
      url: 'https://www.mobygames.com/images/covers/l/310078-the-legend-of-zelda-majora-s-mask-3d-nintendo-3ds-front-cover.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Zelda 1',
      categoryId: '2',
      url: 'https://www.mobygames.com/images/covers/l/310078-the-legend-of-zelda-majora-s-mask-3d-nintendo-3ds-front-cover.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Zelda 2',
      categoryId: '2',
      url: 'https://www.mobygames.com/images/covers/l/310078-the-legend-of-zelda-majora-s-mask-3d-nintendo-3ds-front-cover.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Zelda 3',
      categoryId: '2',
      url: 'https://www.mobygames.com/images/covers/l/310078-the-legend-of-zelda-majora-s-mask-3d-nintendo-3ds-front-cover.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Zelda 4',
      categoryId: '3',
      url: 'https://www.mobygames.com/images/covers/l/310078-the-legend-of-zelda-majora-s-mask-3d-nintendo-3ds-front-cover.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Zelda 5',
      categoryId: '3',
      url: 'https://www.mobygames.com/images/covers/l/310078-the-legend-of-zelda-majora-s-mask-3d-nintendo-3ds-front-cover.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Ghost Recon',
      categoryId: '3',
      url: 'https://www.mobygames.com/images/covers/l/310078-the-legend-of-zelda-majora-s-mask-3d-nintendo-3ds-front-cover.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Games', null, {});
  }
};