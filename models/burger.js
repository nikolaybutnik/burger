const orm = require("../config/orm");

class Burger {
  constructor({ name, devour = false }) {
    this.name = name;
    this.devour = devour;
  }
  async selectAll() {
    orm.selectAll();
  }
  async insertOne() {
    orm.insertOne();
  }
  async updateOne() {
    orm.updateOne();
  }
}

module.exports = Burger;
