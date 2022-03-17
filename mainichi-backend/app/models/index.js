const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  // operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.date = require("./date.model.js")(sequelize, Sequelize);
db.event = require("./event.model.js")(sequelize, Sequelize);
db.icon = require("./icon.model.js")(sequelize, Sequelize);
// M:M Date and Icon
db.icon.belongsToMany(db.date, {
  through: "dateIcon",
  // as: "icons",
  foreignKey: "iconName"
});
db.date.belongsToMany(db.icon, {
  through: "dateIcon",
  // as: "date_icons",
  foreignKey: "date"
});
// O:M Date and Event
db.event.belongsTo(db.date);
db.date.hasMany(db.event, {
  as: "events"
});

module.exports = db;
