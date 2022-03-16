module.exports = (sequelize, Sequelize) => {
  const Icon = sequelize.define("icon", {
    icon_name: {
      type: Sequelize.STRING,
      primaryKey: true
    }
  });
  return Icon;
};
