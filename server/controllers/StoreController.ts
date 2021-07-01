import { Request, Response, NextFunction } from "express";
import { CreateStoreInput } from "../dto";
import { Store } from "../models";
import { FindStore } from "../utility";
import { DuplicatedError } from "./errors/DuplicatedError";
import { NotFoundError } from "./errors/NotFoundError";

export const CreateStore = async (req: Request, res: Response) => {
  const { name, niche, ownerName, storeLink } = <CreateStoreInput>req.body;
  const existingStore = await FindStore("", name);
  if (existingStore) {
    throw new DuplicatedError();
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

export const GetStores = async (req: Request, res: Response) => {
  const stores = await Store.find();
  if (stores) {
    return res.json(stores);
  }
  throw new NotFoundError();
};

export const GetStoresByID = async (req: Request, res: Response) => {
  const storeId = req.params.id;
  const store = await FindStore(storeId);
  if (store) {
    return res.json(store);
  }
  throw new NotFoundError();
};

export const UpdateStore = async (req: Request, res: Response) => {
  const { name, niche, ownerName, storeLink } = <CreateStoreInput>req.body;

  const storeId = req.params.id;
  const store = await FindStore(storeId);

  if (store) {
    store.name = name;
    store.niche = niche;
    store.ownerName = ownerName;
    store.storeLink = storeLink;
    const savedResult = await store.save();

    return res.json(savedResult);
  }
  throw new NotFoundError();
};

export const DeleteStore = async (req: Request, res: Response) => {
  const storeId = req.params.id;
  const store = await FindStore(storeId);

  if (store) {
    const deleteStore = await Store.findByIdAndRemove(storeId);
    return res.json(deleteStore);
  }

  throw new NotFoundError();
};
