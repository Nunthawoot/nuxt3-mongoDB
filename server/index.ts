import { Nitro } from "nitropack";
import mongoose from "mongoose";

export default async (_nitroApp: Nitro) => {
  try {
    const config = useRuntimeConfig();
    await mongoose.connect(config.mongodbUri, () => {
      console.log("Connected to MongoDB");
    });
  } catch (error) {
    console.error(error);
  }
};
