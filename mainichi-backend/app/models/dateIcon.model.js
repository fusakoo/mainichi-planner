module.exports = (sequelize, Sequelize) => {
  // Defines the dateIcons table
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
