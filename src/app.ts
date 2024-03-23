import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";

import categoryRouter from "./routes/categoryRoutes";
import globalError from "./middleware/errorMiddleware";
import ApiError from "./utils/apiError";

const app = express();

// Middlewares
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Routes
app.get("/", (req, res) => {
  res.status(200).json({ message: "Ecommerce API World" });
});

app.use("/api/v1/categories", categoryRouter);

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(new ApiError(`can not find this route : ${req.originalUrl}`, 404));
});
app.use(globalError);

export default app;
