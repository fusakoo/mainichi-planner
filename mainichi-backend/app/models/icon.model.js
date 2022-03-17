module.exports = (sequelize, Sequelize) => {
  const Icon = sequelize.define("icon", {
    iconName: {
      type: Sequelize.STRING,
      primaryKey: true
    }
  });
  return Icon;
};
