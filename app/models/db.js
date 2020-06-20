const mysql = require("mysql");
const dbConfig = require("../config/config.js");

var connection = mysql.createPool({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
  port: dbConfig.port,
  ssl: dbConfig.ssl
});

module.exports = connection;