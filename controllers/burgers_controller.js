const express = require("express");
const Burger = require("../models/burger");
const router = express.Router();

router.get("/", async function (req, res) {
  const data = await Burger.selectAll();
  //   console.log(data);
  res.render("index", { burgers: data });
});

module.exports = router;
