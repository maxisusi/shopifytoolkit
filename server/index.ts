import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import { AdminRoute, VandorRoute } from "./routes";
import { MONGO_URI } from "./config";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/admin", AdminRoute);
app.use("/vandor", VandorRoute);

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => console.log("Connected to DB"))
  .catch((err) => console.error("Error", err));

app.listen(8000, () => {
  console.clear();
  console.log("App is listening on port 8000");
});
