import express, { Request, Response, NextFunction } from "express";
import {
  CreateStore,
  GetStores,
  GetStoresByID,
  UpdateStore,
  DeleteStore,
} from "../controllers";

const router = express.Router();

router.post("/create", CreateStore);
router.get("/get/all", GetStores);
router.get("/get/:id", GetStoresByID);
router.patch("/update/:id", UpdateStore);
router.delete("/delete/:id", DeleteStore);

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "Hello from Admin route" });
});

export { router as StoreRoute };
