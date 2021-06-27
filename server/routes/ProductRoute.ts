import express, { Request, Response, NextFunction } from "express";
import { AddProduct, GetProductsByStore, GetProducts } from "../controllers";

const router = express.Router();

router.post("/add/:id", AddProduct);
router.get("/get/:id", GetProductsByStore);
router.get("/all", GetProducts);

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "Hello from Vandor route" });
});

export { router as ProductRoute };
