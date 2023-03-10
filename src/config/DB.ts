import mongoose from "mongoose";
import enviromentVariable from "./enviromentVariable";

const DB = enviromentVariable.MONGODB_STRING_LOCAL;

const dbConfig = async () => {
  try {
    const conn = await mongoose.connect(DB);
    console.log(`DB connection @: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

export default dbConfig;
