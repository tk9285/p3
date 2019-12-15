'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
        as: 'userId',
      }
    },
    gameId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Game',
        key: 'id',
        as: 'gameId',
      }

    }
  }, {});
  Favorite.associate = function (models) {
    // associations can be defined here
    Favorite.belongsTo(models.User, {
      foreignKey: 'userId'
    }),
    Favorite.belongsTo(models.Game, {
      foreignKey: 'gameId'
    })
  };
  return Favorite;
};