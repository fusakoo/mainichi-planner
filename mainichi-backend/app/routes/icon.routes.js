module.exports = app => {
  const icon = require("../controllers/icon.controller.js");
  var router = require("express").Router();

  // Create a new icon-date relation
  router.post("/", icon.createIconDate);
  // Delete a icon-date relation
  router.delete("/", icon.deleteIconDate);
  app.use('/api/icon', router);
};