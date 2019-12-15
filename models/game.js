'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    title: DataTypes.STRING,
    url: DataTypes.STRING,
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Category',
        key: 'id',
        as: 'categoryId',
      }
    }
  }, {});
  Game.associate = function(models) {
    // associations can be defined here
    Game.hasMany(models.Favorite, {
      foreignKey: 'gameId'
    })
    ,
    Game.belongsTo(models.Category, {
      foreignKey: 'categoryId'
    })
  };
  return Game;
};