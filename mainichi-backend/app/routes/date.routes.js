module.exports = app => {
  const date = require("../controllers/date.controller.js");
  var router = require("express").Router();

  // Create a new date
  router.post("/", date.createDate);
  // Retrieve a single date
  router.get("/:date", date.findDate);
  // Update the note of date
  router.put("/note/:date", date.updateNote);
  // Update the importance of date
  router.put("/important/:date", date.updateImportant);
  app.use('/api/date', router);
};