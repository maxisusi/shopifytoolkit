import { Store, Product } from "../models";

export const FindStore = async (id: string | undefined, name?: string) => {
  if (name) {
    return await Store.findOne({ name });
  } else {
    return await Store.findById(id);
  }
};

export const FindProduct = async (id: string | undefined, name?: string) => {
  if (name) {
    return await Product.findOne({ name });
  } else {
    return await Product.findById(id);
  }
};
