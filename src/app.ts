import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import morgan from "morgan";
import { errorHandler } from "./middleware/errorhandler";
import { AppError, HttpCode } from "./utils/AppError";
import api from "./api/index";

const appConfig = (app: Application) => {
  app
    .use(express.json())
    .use(cors())
    .use(morgan("dev"))
    // API endpoint
    .use("/api", api)

    // Check for Errors
    .all("*", (req: Request, res: Response, next: NextFunction) => {
      next(
        new AppError({
          message: `This route ${req.originalUrl} is not found`,
          httpCode: HttpCode.NOT_FOUND,
        })
      );
    })

    //   Error Handler
    .use(errorHandler);
};

export default appConfig;
