import { check } from "express-validator";
import validatorMiddleware from "../../middleware/validatorMiddleware";

export const getCategoryValidator = [
  check("id").isMongoId().withMessage("invalid category id"),
  validatorMiddleware,
];

export const createCategoryValidator = [
  check("name")
    .notEmpty()
    .withMessage("category name can not be empty")
    .isLength({ min: 3, max: 50 })
    .withMessage("name length between 3 and 50"),
  validatorMiddleware,
];

export const updateCategoryValidator = [
  check("id").isMongoId().withMessage("invalid category id"),
  validatorMiddleware,
];

export const deleteCategoryValidator = [
  check("id").isMongoId().withMessage("invalid category id"),
  validatorMiddleware,
];
