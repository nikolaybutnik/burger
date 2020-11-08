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
  // async updateOne() {}
}

module.exports = Burger;
