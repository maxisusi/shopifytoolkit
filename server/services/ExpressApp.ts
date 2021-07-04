import express, { Application } from "express";
import { StoreRoute, ProductRoute } from "../routes";
import { errorHandler } from "../middlewares/error-handler";

export default async (app: Application) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/store", StoreRoute);
  app.use("/product", ProductRoute);
  app.use(errorHandler);

  return app;
};
