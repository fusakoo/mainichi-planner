const db = require("../models");
const Icon = db.icon;
const DateIcon = db.dateIcon;

// Create an Icon
exports.createIcon = (req,res) => {
  const icon = {
    iconName: req.params.icon,
  };
  Icon.create(icon)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Something went wrong while creating the Icon."
    });
  });
}

// Retrieve all the icons for the date
exports.findAll = (req, res) => {
  const date = req.params.date;
  DateIcon.findAll({
    where: {date: date},
    attributes: ['iconName']
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

// Add an icon to the date
exports.createIconDate = (req,res) => {
  if (!req.body.iconName) {
    res.status(400).send({
      message: "Icon name cannot be empty."
    });
    return;
  }
  const dateIcon = {
    iconName: req.body.iconName,
    date: req.body.date
  };
  DateIcon.create(dateIcon)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Something went wrong while creating the Icon-date relation."
    });
  });
};

// Delete an icon from the date
exports.deleteIconDate = (req,res) => {
  const iconName = req.body.iconName;
  const date = req.body.date;
  DateIcon.destroy({
    where: {
      iconName: iconName,
      date: date
    }
  })
  .then(num => {
    if (num == 1) {
      res.send({
        message: "Icon - Date relation was deleted successfully!"
      });
    } else {
      res.send({
        message: `Cannot delete Icon - Date relation with name=${iconName} and date=${date}. Maybe Icon was not found!`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Could not delete Icon - Date relation with name=" + iconName
    });
  });  
};
