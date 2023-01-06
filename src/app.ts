import express from "express";
import { AppDataSource } from "./data-source.js";
import AuthRoutes from "./routes/auth.routes.js";
import UserRoutes from "./routes/user.routes.js";
import passportService from "./services/auth/passport.service.js";

class App {
  public express: any;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.initDB();
  }

  middleware() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(
      "/users",
      passportService.authenticate("jwt", { session: false }),
      UserRoutes
    );
    this.express.use("/auth", AuthRoutes);
  }

  initDB() {
    AppDataSource.initialize()
      .then(async () => {
        console.log("Database Connected");
      })
      .catch((error) => console.log(error));
  }
}

export default new App().express;
