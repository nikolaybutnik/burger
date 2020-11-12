// Load dependencies.
const mysql = require("mysql2");

// Configure mysql database connection.
const defaultConfig = {
  host: "localhost",
  user: "root",
  port: 3306,
  password: "",
  database: "burgers_db",
};
const connection = mysql.createConnection(defaultConfig).promise();

// Export the connection to be used in other files.
module.exports = connection;
