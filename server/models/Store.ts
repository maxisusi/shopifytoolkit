import mongoose, { Schema, Document, Model } from "mongoose";

interface StoreDoc extends Document {
  name: string;
  ownerName: string;
  niche: [string];
  storeLink: string;
  products: [
    {
      name: string;
      sellingPrice: string;
      cogs: string;
      shippingPrice: string;
    }
  ];
}

const StoreSchema = new Schema(
  {
    name: { type: String, require: true },
    ownerName: { type: String, require: false },
    niche: { type: [String], require: true },
    storeLink: { type: String, require: false },
    products: [
      {
        name: { type: String, require: true },
        sellingPrice: { type: String, require: true },
        cogs: { type: String, require: true },
        shippingPrice: { type: String, require: true },
      },
    ],
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.__v;
        delete ret.createdAt;
        delete ret.updatedAt;
      },
    },
    timestamps: true,
  }
);

const Store = mongoose.model<StoreDoc>("store", StoreSchema);

export { Store };
