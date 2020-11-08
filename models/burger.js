const orm = require("../config/orm");

class Burger {
  constructor({ name, devour = false }) {
    this.name = name;
    this.devour = devour;
  }

  static async selectAll() {
    return orm.selectAll();
  }

  static async insertOne(burgerName) {
    return orm.insertOne(burgerName);
  }
  static async updateOne(id) {
    return orm.updateOne(id);
  }
}

module.exports = Burger;
