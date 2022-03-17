module.exports = app => {
  const event = require("../controllers/event.controller.js");
  var router = require("express").Router();
  
  // Create a new date
  router.post("/", event.createEvent);
  // Delete the importance of date
  router.delete("/", event.deleteEvent);
  app.use('/api/event', router);
};