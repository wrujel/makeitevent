import express from "express";
import cors from "cors";
import morgan from "morgan";

import eventRoutes from "./routes/event.routes";
import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";

import { initSetup } from "./libs/initialSetup";

const app = express();
initSetup();

app.set("PORT", 5000);
app.set("json spaces", 4);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Server running");
});
app.use("/api/events", eventRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

export default app;
