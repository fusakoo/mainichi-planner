module.exports = (sequelize, Sequelize) => {
  // Defines the events table
  const Event = sequelize.define("event", {
    eventName: {
      type: Sequelize.STRING
    }
  });
  return Event;
};
