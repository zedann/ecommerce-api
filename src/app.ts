import express from "express";
import morgan from "morgan";

import categoryRouter from "./routes/categoryRoutes";

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

export default app;
