const db = require("../models");
const Date = db.date;

// Create a date if it doesn't exist
exports.createDate = (req,res) => {
  if (!req.body.date) {
    res.status(400).send({
      message: "Date cannot be empty."
    });
    return;
  }
  const date = {
    date: req.body.date
  };
  Date.create(date)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Something went wrong while creating the Date."
    });
  });
};

// Find a single Date object in DB from a date input
exports.findDate = (req,res) => {
  const date = req.params.date;
  Date.findByPk(date)
  .then(data => {
    if(data) {
      res.send(data);
    } else {
      const newDate = {
        date: req.params.date
      }
      Date.create(newDate)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Something went wrong while creating the Date."
        });
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Something went wrong while retrieving dates."
    });
  });
};

// Update the note of the Date
exports.updateNote = (req,res) => {
  const date = req.params.date;
  Date.update(req.body, {
    where: { date: date }
  })
  .then(num => {
    if (num == 1) {
      res.send({
        message: "Date's note was updated successfully."
      });
    } else {
      res.send({
        message: `Cannot update Date with date=${date}. Maybe Date was not found or req.body is empty!`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Error updating Date with date=" + date
    });
  });
};

// Update the important boolean (importance) of the Date
exports.updateImportant = (req,res) => {
  const date = req.params.date;
  Date.update(req.body, {
    where: { date: date }
  })
  .then(num => {
    if (num == 1) {
      res.send({
        message: "Date's importance was updated successfully."
      });
    } else {
      res.send({
        message: `Cannot update Date with date=${date}. Maybe Date was not found or req.body is empty!`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Error updating Date with date=" + date
    });
  });
};
