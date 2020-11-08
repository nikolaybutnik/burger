const express = require("express");
const Burger = require("../models/burger");
const router = express.Router();

// Create default / route
router.get("/", async function (req, res) {
  const data = await Burger.selectAll();
  res.render("index", { burgers: data });
});

router.get("/api/burgers", async function (req, res) {
  try {
    const burgers = await Burger.selectAll();
    res.status(200).json({ data: burgers });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/api/burgers", async function (req, res) {
  try {
    const data = await Burger.insertOne(req.body.burger_name);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.patch("/api/burgers/:id", async function (req, res) {
  try {
    const id = req.params.id;
    const burgerUpdate = await Burger.updateOne(id);
    res.status(201).json(burgerUpdate);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
