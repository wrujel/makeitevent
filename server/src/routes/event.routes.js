import { Router } from "express";
const router = Router();

import * as eventsCtrl from "../controllers/event.controller";
import { authJwt } from "../middlewares";

router.post("/", [authJwt.verifyToken], eventsCtrl.createEvent);

router.get("/:eventId", eventsCtrl.getEventById);

router.get("/", eventsCtrl.getEvents);

router.put(
  "/:eventId",
  [authJwt.verifyToken, authJwt.isSupport, authJwt.isAdmin],
  eventsCtrl.updateEventById
);

router.delete(
  "/:eventId",
  [authJwt.verifyToken, authJwt.isAdmin],
  eventsCtrl.deleteEventById
);

export default router;
