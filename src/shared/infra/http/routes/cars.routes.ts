import { Router } from "express";
import { ensureAdmin } from "../middlewars/ensureAdmin";
import { ensureAuthenticated } from "../middlewars/ensureAuthenticated";
import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";

const carsRoutes = Router();

const createCarController = new CreateCarController();

carsRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle
);

export { carsRoutes };
