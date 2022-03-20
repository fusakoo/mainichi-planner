module.exports = (sequelize, Sequelize) => {
  // Defines the icons table
  const Icon = sequelize.define("icon", {
    iconName: {
      type: Sequelize.STRING,
      primaryKey: true
    }
  });
  return Icon;
};
