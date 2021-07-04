import { Request, Response, NextFunction } from "express";
import { CreateProductInput } from "../dto/Product.dto";
import { Store, Product } from "../models";
import { FindProduct, FindStore } from "../utility";

import { NotFoundError } from "./errors/NotFoundError";

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

    return res.status(201).send("The product has been successfully created");
  } else {
    throw new NotFoundError();
  }
};

export const GetProductsByStore = async (req: Request, res: Response) => {
  const store = await FindStore(req.params.id);

  if (store) {
    return res.status(200).send(store.products);
  }
  throw new NotFoundError();
};

export const GetProducts = async (req: Request, res: Response) => {
  const products = await Product.find();

  if (products) {
    res.status(200).send(products);
  }
  throw new NotFoundError();
};

export const UpdateProduct = async (req: Request, res: Response) => {
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
    return res.status(200).send(product);
  }
  throw new NotFoundError();
};

export const DeleteProduct = async (req: Request, res: Response) => {
  const productId = req.params.id;
  const product = await FindProduct(productId);

  if (product) {
    //Delete product from product doc
    const deleteProduct = await Product.findByIdAndRemove(productId);
    //Delete product from store
    const storeUpdated = await Store.updateOne(
      { products: productId },
      {
        $pull: { products: productId },
      }
    );

    res.status(200).send("Product successfully deleted");
  }
  throw new NotFoundError();
};
