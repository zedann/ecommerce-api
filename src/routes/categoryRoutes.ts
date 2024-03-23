import express from "express";
const router = express.Router();
import {
  createCategoryValidator,
  deleteCategoryValidator,
  getCategoryValidator,
  updateCategoryValidator,
} from "../utils/validators/categoryValidator";

import {
  createCategorie,
  deleteCategory,
  getCategorie,
  getCategories,
  updateCategory,
} from "../controllers/categoryController";

router
  .route("/")
  .get(getCategories)
  .post(createCategoryValidator, createCategorie);

router
  .route("/:id")
  .get(getCategoryValidator, getCategorie)
  .patch(updateCategoryValidator, updateCategory)
  .delete(deleteCategoryValidator, deleteCategory);

export default router;
