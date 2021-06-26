import mongoose, { Schema, Document, Model } from "mongoose";

interface StoreDoc extends Document {
  name: string;
  ownerName: string;
  niche: [string];
  storeLink: string;
  // products: any;
}

const StoreSchema = new Schema(
  {
    name: { type: String, require: true },
    ownerName: { type: String, require: false },
    niche: { type: [String], require: true },
    storeLink: { type: String, require: false },
    // products: [
    //   {
    //     type: mongoose.SchemaTypes.ObjectId,
    //     ref: "product",
    //   },
    // ],
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
