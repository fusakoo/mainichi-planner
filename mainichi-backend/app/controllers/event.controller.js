const db = require("../models");
const Date = db.date;
const Event = db.event;

// Create an Event
exports.createEvent = (req,res) => {
  if (!req.body.event_name) {
    res.status(400).send({
      message: "Event name cannot be empty."
    });
    return;
  }
  const event = {
    eventName: req.body.event_name,
    dateDate: req.body.date
  };
  Event.create(event)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Something went wrong while creating the Event."
    });
  });
}

// Delete an event
exports.deleteEvent = (req,res) => {
  const eventName = req.body.event_name;
  const date = req.body.date;
  Event.destroy({
    where: {
      eventName: eventName,
      date: date
    }
  })
  .then(num => {
    if (num == 1) {
      res.send({
        message: "Event was deleted successfully!"
      });
    } else {
      res.send({
        message: `Cannot delete Event with name=${eventName} and date=${date}. Maybe Date was not found!`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Could not delete Date with name=" + eventName
    });
  });  
};
