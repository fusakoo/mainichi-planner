const db = require("../models");
const Event = db.event;

// Retrieve all the events for the date
exports.findAll = (req, res) => {
  const date = req.params.date;
  Event.findAll({
    where: {dateDate: date},
    attributes: ['eventName']
  })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Something went wrong while retrieving the icons."
    });
  });
}


// Create an Event
exports.createEvent = (req,res) => {
  if (!req.body.eventName) {
    res.status(400).send({
      message: "Event name cannot be empty."
    });
    return;
  }
  const event = {
    eventName: req.body.eventName,
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
  const eventName = req.body.eventName;
  const date = req.body.date;
  Event.destroy({
    where: {
      eventName: eventName,
      dateDate: date
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
