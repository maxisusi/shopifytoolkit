import { Request, Response, NextFunction } from "express";
import { CreateProductInput } from "../dto/Product.dto";
import { Store, Product } from "../models";
import { FindProduct, FindStore } from "../utility";

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

export const UpdateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, cogs, sellingPrice, shippingFees } = <CreateProductInput>(
    req.body
  );

  const productId = req.params.id;

  const product = await FindProduct(productId);

  if (product) {
    product.name = name;
    product.cogs = cogs;
    product.sellingPrice = sellingPrice;
    product.shippingFees = shippingFees;

    const savedResult = await product.save();

    return res.json(product);
  } else {
    res.json({ message: "No available store with this ID" });
  }
};

export const DeleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const productId = req.params.id;
  const product = await FindProduct(productId);

  if (product) {
    //Delete product
    const deleteProduct = await Product.findByIdAndRemove(productId);
    //Delete product from store
    const storeUpdated = await Store.updateOne(
      { products: productId },
      {
        $pull: { products: productId },
      }
    );

    res.json(storeUpdated);
  }
};
