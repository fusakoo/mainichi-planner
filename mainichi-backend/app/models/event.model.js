module.exports = (sequelize, Sequelize) => {
  const Event = sequelize.define("event", {
    event_name: {
      type: Sequelize.STRING
    }
  });
  return Event;
};
