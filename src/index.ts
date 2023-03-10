import express from "express";
import appConfig from "./app";
import dbConfig from "./config/DB";
import enviromentVariable from "./config/enviromentVariable";

const app = express();

// Application Initialization
appConfig(app);
// DB Initialization
dbConfig();

app.listen(enviromentVariable.PORT, () => {
  console.log("Server is up on port");
});
