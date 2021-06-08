import { Router } from "express";
import { homeController } from "../controllers/homeController";

const homeRouter: Router = Router();

homeRouter.get("/", homeController);

export { homeRouter };
