import express from "express";
import { UserController } from "../controllers/user.controller.js";

class UserRoutes {
  public router: express.Router;
  public userController = new UserController();

  constructor() {
    this.router = express.Router();
    this.routes();
  }

  public routes(): void {
    this.router.get("/", this.userController.index);
  }
}

export default new UserRoutes().router;
