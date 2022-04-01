const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.route("/events").get(async function (req, res) {
  const dbConnect = dbo.getDb();

  dbConnect
    .collection("Events")
    .find({})
    .limit(10)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching events!");
      } else {
        res.json(result);
      }
    });
});

recordRoutes.route("/events/find/:id").get(function (req, res) {
  const dbConnect = dbo.getDb();
  const myquery = { _id: ObjectId(req.params.id) };

  dbConnect.collection("Events").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

recordRoutes.route("/events/create").post(function (req, res) {
  const dbConnect = dbo.getDb();
  const eventDocument = {
    title: req.body.title,
    creator: req.body.creator,
  };

  dbConnect
    .collection("Events")
    .insertOne(eventDocument, function (err, result) {
      if (err) {
        res.status(400).send("Error inserting events!");
      } else {
        console.log(`Added a new event`);
        res.status(204).send();
      }
    });
});

recordRoutes.route("/events/update/:id").post(function (req, res) {
  const dbConnect = dbo.getDb();
  const eventQuery = { _id: ObjectId(req.params.id) };
  const updates = {
    $set: {
      title: req.body.title,
      about: req.body.about,
    },
  };

  dbConnect
    .collection("Events")
    .updateOne(eventQuery, updates, function (err, _result) {
      if (err) {
        res.status(400).send(`Error updating events`);
      } else {
        console.log("1 document updated");
      }
    });
});

recordRoutes.route("/events/delete/:id").delete((req, res) => {
  const dbConnect = dbo.getDb();
  const eventQuery = { _id: req.body.id };

  dbConnect.collection("Events").deleteOne(eventQuery, function (err, _result) {
    if (err) {
      res.status(400).send(`Error deleting events`);
    } else {
      console.log("1 document deleted");
    }
  });
});

module.exports = recordRoutes;
