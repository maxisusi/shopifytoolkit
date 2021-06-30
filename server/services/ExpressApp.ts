import express, { Application } from "express";
import bodyParser from "body-parser";

import { StoreRoute, ProductRoute } from "../routes";

export default async (app: Application) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/store", StoreRoute);
  app.use("/product", ProductRoute);

  return app;
};
