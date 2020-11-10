const orm = require("../config/orm");

class Burger {
  constructor({ name, devour = false }) {
    this.name = name;
    this.devour = devour;
  }

  static async selectAllBurgers(col_name) {
    return orm.selectAll(col_name);
  }

  static async insertOneBurger(
    table_name,
    col_name_1,
    col_name_2,
    value_1,
    value_2
  ) {
    return orm.insertOne(table_name, col_name_1, col_name_2, value_1, value_2);
  }

  static async updateOneBurger(
    table_name,
    key_val_to_set,
    condition_col_name,
    value
  ) {
    return orm.updateOne(table_name, key_val_to_set, condition_col_name, value);
  }
}

module.exports = Burger;
