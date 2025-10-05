import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async (mongoURI) => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log(`\nMongoDB is connected!! DB_Host : ${connectionInstance.connection.host} `);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export  {connectDB};
