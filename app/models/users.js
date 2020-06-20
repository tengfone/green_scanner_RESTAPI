const sql = require("./db.js");

const User = function(user) {
    this.username = user.username;
    this.points = user.points;
  };

User.findById = (username, result) => {
  sql.query(`SELECT points FROM user WHERE username = ${username}`, (err, res) => {
      if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
      }

      if (res.length) {
      console.log("found customer: ", res[0]);
      result(null, res[0]);
      return;
      }

      // not found Customer with the id
      result({ kind: "not_found" }, null);
  });
};

module.exports = User;
