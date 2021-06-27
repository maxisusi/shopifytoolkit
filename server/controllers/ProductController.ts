import { Request, Response, NextFunction } from "express";
import { CreateProductInput } from "../dto/Product.dto";
import { Store, Product } from "../models";
import { FindStore } from "../utility";

export const AddProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, sellingPrice, cogs, shippingFees } = <CreateProductInput>(
    req.body
  );
  const store = await FindStore(req.params.id);

  if (store) {
    const createProduct = await Product.create({
      storeId: req.params.id,
      name,
      sellingPrice,
      cogs,
      shippingFees,
    });

    store.products.push(createProduct);

    const result = await store.save();

    return res.json(result);
  } else {
    return res.json({ message: "No store corresponding to this ID" });
  }
};

export const GetProductsByStore = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const store = await FindStore(req.params.id);

  if (store) {
    return res.json(store.products);
  } else {
    return res.json({ message: "No store corresponding to this ID" });
  }
};

export const GetProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = await Product.find();

  if (products) {
    res.json(products);
  } else {
    res.json({ message: "No products available" });
  }
};
