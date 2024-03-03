"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app_1 = __importDefault(require("./app"));
const mongoose_1 = __importDefault(require("mongoose"));
const DB = process.env.DB_URL
    .replace("<password>", process.env.DB_PASSWORD || "")
    .replace("<dbname>", process.env.DB_NAME || "");
// DB CONNECTION
mongoose_1.default
    .connect(DB)
    .then(() => console.log("DB connection successful!"))
    .catch(() => console.log("DB connection failed!"));
const PORT = process.env.PORT || 3000;
app_1.default.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
