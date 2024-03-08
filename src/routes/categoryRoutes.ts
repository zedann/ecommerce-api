import express from "express";

const router = express.Router();

import {
  createCategorie,
  deleteCategory,
  getCategorie,
  getCategories,
  updateCategory,
} from "../controllers/categoryController";

router.route("/").get(getCategories).post(createCategorie);
router
  .route("/:id")
  .get(getCategorie)
  .patch(updateCategory)
  .delete(deleteCategory);
export default router;
