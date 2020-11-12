const connection = require("./connection");

const orm = {
  selectAll: async function (col_name) {
    const sql = "SELECT * FROM ??";
    const [rows] = await connection.query(sql, [col_name]);
    return rows;
  },
  insertOne: async function (
    table_name,
    col_name_1,
    col_name_2,
    value_1,
    value_2
  ) {
    const sql = "INSERT INTO ?? (??, ??) VALUES (?, ?)";
    const [rows] = await connection.query(sql, [
      table_name,
      col_name_1,
      col_name_2,
      value_1,
      value_2,
    ]);
    return rows;
  },
  updateOne: async function (
    table_name,
    key_val_to_set,
    condition_col_name,
    value
  ) {
    const sql = "UPDATE ?? SET ? WHERE ?? = ?";
    const [rows] = await connection.query(sql, [
      table_name,
      key_val_to_set,
      condition_col_name,
      value,
    ]);
    return rows;
  },
  deleteOne: async function (table_name, condition_col_name, value) {
    const sql = "DELETE FROM ?? WHERE ?? = ?";
    const [rows] = await connection.query(sql, [
      table_name,
      condition_col_name,
      value,
    ]);
    return rows;
  },
};

module.exports = orm;
