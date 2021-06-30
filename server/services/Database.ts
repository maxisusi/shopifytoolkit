import mongoose from "mongoose";
import { MONGO_URI } from "../config";

export default async () => {
  mongoose.set("useFindAndModify", false);

  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log("DB connected...");
  } catch (ex) {
    console.error(ex);
  }
};
