import dotenv from "dotenv";
dotenv.config();

import app from "./app";

import mongoose from "mongoose";

const DB = (process.env.DB_URL as string)
  .replace("<password>", process.env.DB_PASSWORD || "")
  .replace("<dbname>", process.env.DB_NAME || "");

// DB CONNECTION
mongoose
  .connect(DB)
  .then(() => console.log("DB connection successful!"))
  .catch(() => console.log("DB connection failed!"));

const PORT = process.env.PORT || 3000;

console.log("hello");

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.error(`UnhandledRejection Errors: ${err.name} | ${err.message}`);
  server.close(() => {
    console.error(`Shutting down....`);
    process.exit(1);
  });
});
