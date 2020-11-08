const mysql = require("mysql2");

const defaultConfig = {
  host: "localhost",
  user: "root",
  port: 3306,
  password: "example",
  database: "burgers_db",
};

const connection = mysql.createConnection(defaultConfig).promise();

module.exports = connection;
