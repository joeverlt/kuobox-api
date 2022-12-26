import express from "express";
import { AppDataSource } from "./data-source.js";
import UserRoutes from "./routes/user.routes.js";

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
    this.express.use("/users", UserRoutes);
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
