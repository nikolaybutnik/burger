const orm = require("../config/orm");

class Burger {
  constructor({ name, devour = false }) {
    this.name = name;
    this.devour = devour;
  }

  static async selectAll() {
    return orm.selectAll();
  }

  // async insertOne() {}
  // async updateOne() {}
}

module.exports = Burger;
