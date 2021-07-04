import express from "express";
import "express-async-errors";
import App from "./services/ExpressApp";
import dbConnection from "./services/Database";

const StartServer = async () => {
  const app = express();

  await dbConnection();

  await App(app);

  app.listen(8000, () => {
    console.clear();
    console.log("Listening to port 8000");
  });
};

StartServer();
