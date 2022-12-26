import App from "./app.js";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT;

App.listen(port, () => {
  console.clear();
  console.log(
    `Express server has started on port ${process.env.PORT}, see http://localhost:${process.env.PORT}`
  );
});
