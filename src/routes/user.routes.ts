import express from "express";
import { UserController } from "../controllers/user.controller.js";
import passportService from "../services/auth/passport.service.js";

class UserRoutes {
  public router: express.Router;
  public userController = new UserController();

  constructor() {
    this.router = express.Router();
    this.routes();
  }

  public routes(): void {
    this.router.get(
      "/",
      passportService.authenticate("jwt", { session: false }),
      this.userController.index
    );
  }
}

export default new UserRoutes().router;
