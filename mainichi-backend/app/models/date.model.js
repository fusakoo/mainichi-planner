module.exports = (sequelize, Sequelize) => {
  // Defines the dates table
  const Date = sequelize.define("date", {
    date: {
      type: Sequelize.DATEONLY,
      primaryKey: true
    },
    note: {
      type: Sequelize.STRING,
      defaultValue: ''
    },
    important: {
      type: Sequelize.BOOLEAN,
      defaultValue: '0'
    }
  });
  return Date;
};
