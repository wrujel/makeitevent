import mongoose from "mongoose";
import config from "./config";

mongoose
  .connect(config.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Makeitevent DB is connected"))
  .catch((err) => console.log(err));
