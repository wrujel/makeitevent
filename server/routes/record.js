const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");

recordRoutes.route("/events").get(async function (req, res) {
  const dbConnect = dbo.getDb();

  dbConnect
    .collection("Events")
    .find({})
    .limit(10)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listings!");
      } else {
        res.json(result);
      }
    });
});

recordRoutes.route("/events/create").post(function (req, res) {
  // CREATE
});

recordRoutes.route("/events/update").post(function (req, res) {
  // UPDATE
});

recordRoutes.route("/events/delete/:id").delete((req, res) => {
  // DELETE
});

module.exports = recordRoutes;
