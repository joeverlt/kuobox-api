import express from "express";
import { AuthController } from "../controllers/auth.controller.js";

class AuthRoutes {
  public router: express.Router;
  public authController = new AuthController();

  constructor() {
    this.router = express.Router();
    this.routes();
  }

  public routes(): void {
    this.router.post("/signup", this.authController.signUp);
    this.router.post("/login", this.authController.logIn);
  }
}

export default new AuthRoutes().router;
