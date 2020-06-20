const Users = require("../models/users.js");

exports.findOne = (req, res) => {
  Users.findById(req.params.username, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.username}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Customer with id " + req.params.username
          });
        }
      } else res.send(data);
    });
  };

exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Users.updateById( req.params.points,
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.customerId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Customer with id " + req.params.customerId
          });
        }
      } else res.send(data);
    }
  );
};