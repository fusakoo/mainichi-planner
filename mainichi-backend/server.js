const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

var corsOptions = {
  origin: process.env.FRONTEND_URL
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Mainichi app backend api." });
});

require("./app/routes/date.routes.js")(app);
require("./app/routes/event.routes.js")(app);
require("./app/routes/icon.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on ${process.env.HOST}:${PORT}.`);
  console.log(`Server is waiting for ${process.env.FRONTEND_URL}.`)
});
