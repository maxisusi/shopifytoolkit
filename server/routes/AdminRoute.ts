import express, { Request, Response, NextFunction } from "express";
import {
  CreateStore,
  GetStores,
  GetStoresByID,
  UpdateStore,
  DeleteStore,
} from "../controllers";

const router = express.Router();

router.post("/store", CreateStore);
router.get("/stores", GetStores);
router.get("/store/:id", GetStoresByID);
router.patch("/store/update/:id", UpdateStore);
router.delete("/store/delete/:id", DeleteStore);

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "Hello from Admin route" });
});

export { router as AdminRoute };
