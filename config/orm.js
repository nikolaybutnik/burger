const connection = require("./connection");

const orm = {
  selectAll: async function () {
    const sql = "SELECT * FROM burgers";
    const [rows] = await connection.query(sql);
    // console.log(rows);
    return rows;
  },
  // insertOne: async function () {
  //   const sql = "";
  //   const [rows] = await connection.query(sql, []);
  //   return rows;
  // },
  // updateOne: async function () {
  //   const sql = "";
  //   const [rows] = await connection.query(sql, []);
  //   return rows;
  // },
};

module.exports = orm;
