// Load dependencies.
const express = require("express");
const Burger = require("../models/burger");
const router = express.Router();

// Create default / route that renders all burgers in the database.
// Obtain all burgers in the database, parse into object, and render through index.handlebars.
router.get("/", async function (req, res) {
  const data = await Burger.selectAll();
  res.render("index", { burgers: data });
});

// Create an api GET route that displays all burger objects in the database in json format.
router.get("/api/burgers", async function (req, res) {
  try {
    const burgers = await Burger.selectAll();
    res.status(200).json({ data: burgers });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create an api POST route that receives an object when the Add Burger form is submitted.
// Pull the data from the object and INSERT the new burger into the database.
router.post("/api/burgers", async function (req, res) {
  try {
    const data = await Burger.insertOne(req.body.burger_name);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create an api PATCH route that receives an onject send by the DEVOUR IT! button. The object contains an
// id number that is used to find the relevant burger in tge database, and update its 'devoured' value to 'true'.
router.patch("/api/burgers/:id", async function (req, res) {
  try {
    const id = req.params.id;
    const burgerUpdate = await Burger.updateOne(id);
    res.status(201).json(burgerUpdate);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Export the router.
module.exports = router;
