module.exports = (sequelize, Sequelize) => {
  const Event = sequelize.define("event", {
    eventName: {
      type: Sequelize.STRING
    }
  });
  return Event;
};
