module.exports = (sequelize, Sequelize) => {
  const DateIcon = sequelize.define("dateIcon", {
    iconName: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    date: {
      type: Sequelize.DATEONLY,
      primaryKey: true
    }
  });
  return DateIcon;
};
