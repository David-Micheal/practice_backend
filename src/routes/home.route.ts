import { Router, Request, Response, NextFunction } from "express";

const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(200).json({ message: "Welcome to Set06" });
  } catch (error) {
    next(error);
  }
});

export default router;
