// Load dependencies.
const mysql = require("mysql2");

let connection;

// Configure mysql database connection.
try {
  if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
    connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      port: 3306,
      password: "root",
      database: "burgers_db",
    });
  }
} catch (err) {
  if (err) throw err;
}

// Export the connection to be used in other files.
module.exports = connection.promise();
