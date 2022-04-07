import { Router } from "express";
const router = Router();

import * as eventsCtrl from "../controllers/event.controller";
import { authJwt } from "../middlewares";

router.get("/", eventsCtrl.getEvent);

router.get("/:eventId", eventsCtrl.getEventById);

router.post("/", [authJwt.verifyToken], eventsCtrl.createEvent);

router.put(
  "/:eventId",
  [authJwt.verifyToken, authJwt.isSupport],
  eventsCtrl.updateEventById
);

router.delete(
  "/:eventId",
  [authJwt.verifyToken, authJwt.isAdmin],
  eventsCtrl.deleteEventById
);

export default router;
