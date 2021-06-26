import express, { Request, Response, NextFunction } from "express";
import { AddProduct } from "../controllers";

const router = express.Router();

router.post("/product/", AddProduct);

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "Hello from Vandor route" });
});

export { router as ProductRoute };
