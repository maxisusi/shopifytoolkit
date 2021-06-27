import { Request, Response, NextFunction } from "express";
import { CreateStoreInput } from "../dto";
import { Store } from "../models";
import { FindStore } from "../utility";

export const CreateStore = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, niche, ownerName, storeLink } = <CreateStoreInput>req.body;
  const existingStore = await FindStore("", name);
  if (existingStore) {
    return res.json({ message: "You are creating the same store twice" });
  }

  //Create the store in database
  const createStore = await Store.create({
    name,
    niche,
    ownerName,
    storeLink,
    products: [],
  });

  return res.json(createStore);
};

export const GetStores = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const stores = await Store.find();
  if (stores) {
    return res.json(stores);
  }
  return res.json({ message: "No store has been created" });
};

export const GetStoresByID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const storeId = req.params.id;
  const store = await FindStore(storeId);
  if (store) {
    return res.json(store);
  }
  return res.json({ message: "There is no store with the corresponding id" });
};

export const UpdateStore = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, niche, ownerName, storeLink } = <CreateStoreInput>req.body;

  const storeId = req.params.id;
  const store = await FindStore(storeId);

  if (store) {
    store.name = name;
    store.niche = niche;
    store.ownerName = ownerName;
    store.storeLink = storeLink;

    const savedResult = await store.save();

    return res.json(store);
  } else {
    return res.json({ message: "No corresponding store" });
  }
};

export const DeleteStore = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const storeId = req.params.id;
  const store = await FindStore(storeId);

  if (store) {
    const deleteStore = await Store.findByIdAndRemove(storeId);
    return res.json(deleteStore);
  } else {
    return res.json({ message: "No corresponding store with the provided ID" });
  }
};
