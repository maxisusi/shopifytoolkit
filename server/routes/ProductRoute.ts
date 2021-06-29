import express, { Request, Response, NextFunction } from "express";
import {
  AddProduct,
  GetProductsByStore,
  GetProducts,
  UpdateProduct,
  DeleteProduct,
} from "../controllers";

const router = express.Router();

router.post("/create/:id", AddProduct);
router.get("/:id", GetProductsByStore);
router.get("/get/all", GetProducts);
router.patch("/update/:id", UpdateProduct);
router.delete("/del/:id", DeleteProduct);

export { router as ProductRoute };
