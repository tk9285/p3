'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    title: DataTypes.STRING
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
    Category.hasMany(models.Game, {
      foreignKey: 'categoryId'
    })
  };
  return Category;
};