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

recordRoutes.route("/events/create").post(function (req, response) {
  let db_connect = dbo.getDb();
  let event = {
    title: req.body.title,
    date: req.body.date,
    creator: req.body.creator,
    about: req.body.about,
    time_start: req.body.time_start,
    time_end: req.body.time_end,
    location: req.body.location,
    image: req.body.image,
  };

  db_connect.collection("Events").insertOne(event, function (err, res) {
    if (err) throw err;
    response.json(res);
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
  const eventQuery = { _id: ObjectId(req.params.id) };

  dbConnect.collection("Events").deleteOne(eventQuery, function (err, _result) {
    if (err) {
      res.status(400).send(`Error deleting events`);
    } else {
      console.log("1 document deleted");
    }
  });
});

module.exports = recordRoutes;
