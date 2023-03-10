import dotenv from "dotenv";
dotenv.config();

const enviromentVariable = {
  PORT: process.env.PORT,
  MONGODB_STRING_LOCAL: process.env.MONGODB_STRING_LOCAL!,
};

export default enviromentVariable;
