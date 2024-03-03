import express from "express";
import morgan from "morgan";

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

console.log(process.env.NODE_ENV);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
