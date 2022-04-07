import { Schema, model } from "mongoose";

const eventSchema = new Schema(
  {
    title: String,
    date: Date,
    followers: Number,
    about: String,
    time_start: Date,
    time_end: Date,
    location: String,
    imgURL: String,
  },
  {
    collection: "Events",
    timestamps: true,
    versionKey: false,
  }
);

export default model("Event", eventSchema);
