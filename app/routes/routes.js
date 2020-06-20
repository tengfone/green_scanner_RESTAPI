const sql = require("../models/db.js");

module.exports = app => {
    const users = require("../controllers/controller.js");
    app.get("/users/:username", users.findOne);
    app.get("/update/:points", (request, response) => {
        const points = request.params.points;
        sql.query(`UPDATE user SET points = ${points} WHERE username = username`, [request.body, points], (error, result) => {
            if (error) throw error;
            response.send('Points updated successfully.');
        });
    });
};
