const db = require("../models");
const DateIcon = db.DateIcon;

// Add an icon to the date
exports.createIconDate = (req,res) => {
  if (!req.body.icon_name) {
    res.status(400).send({
      message: "Icon name cannot be empty."
    });
    return;
  }
  const dateIcon = {
    iconName: req.body.icon_name,
    dateDate: req.body.date
  };
  DateIcon.create(dateIcon)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Something went wrong while creating the Date - Icon relationship."
    });
  });
};

// Delete an icon from the date
exports.deleteIconDate = (req,res) => {
  const iconName = req.body.icon_name;
  const date = req.body.date;
  DateIcon.destroy({
    where: {
      iconName: iconName,
      dateDate: date
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
