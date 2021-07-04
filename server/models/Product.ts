import mongoose, { Schema, Document, Model } from "mongoose";

interface ProductDoc extends Document {
  storeId: string;
  name: string;
  sellingPrice: string;
  cogs: string;
  shippingFees: string;
}

const ProductSchema = new Schema(
  {
    storeId: { type: String, require: true },
    name: { type: String, require: true },
    sellingPrice: { type: String, require: true },
    cogs: { type: String, require: true },
    shippingFees: { type: String, require: true },
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.__v, delete ret.createdAt, delete ret.updatedAt;
      },
    },

    timestamps: true,
  }
);

const Product = mongoose.model<ProductDoc>("product", ProductSchema);

export { Product };
