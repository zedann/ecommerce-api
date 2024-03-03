import express from "express";

const router = express.Router();

import { getCategories } from "../controllers/categoryController";

router.get("/", getCategories);

export default router;
