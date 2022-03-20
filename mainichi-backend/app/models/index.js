const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
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

// Initializes each table
db.date = require("./date.model.js")(sequelize, Sequelize);
db.event = require("./event.model.js")(sequelize, Sequelize);
db.icon = require("./icon.model.js")(sequelize, Sequelize);
db.dateIcon = require("./dateIcon.model.js")(sequelize, Sequelize);

// M:M dates and icons
db.icon.belongsToMany(db.date, {
  through: "dateIcons",
  foreignKey: "iconName"
});
db.date.belongsToMany(db.icon, {
  through: "dateIcons",
  foreignKey: "date"
});
// O:M dates and events
db.event.belongsTo(db.date);
db.date.hasMany(db.event, {
  as: "events"
});

module.exports = db;
