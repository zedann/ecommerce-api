import { Request, Response } from "express";
import Category from "../models/categoryModel";
import slugify from "slugify";
import asyncHandler from "express-async-handler";

/**
 *
 * @param req Request
 * @param res
 */
export const getCategories = asyncHandler(
  async (req: Request, res: Response) => {
    const page = +(req.query.page || 1);
    const limit = +(req.query.limit || 5);
    const skip = (page - 1) * limit;
    const categories = await Category.find().skip(skip).limit(limit);
    res.status(200).json({
      status: "success",
      results: categories.length,
      data: {
        categories,
      },
    });
  }
);
/**
 * @description get category by id
 * @route GET /api/v1/categories/:id
 * @access Public
 */
export const getCategorie = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const category = await Category.findById(id);
    if (!category) {
      res.status(404).json({
        status: "fail",
        message: "No category with this id",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        category,
      },
    });
  }
);
/**
 * @description create category
 * @route POST /api/v1/categories
 * @access Private
 */
export const createCategorie = asyncHandler(
  async (req: Request, res: Response) => {
    const name = req.body.name;
    const newCategorie = await Category.create({ name, slug: slugify(name) });
    res.status(201).json({
      status: "success",
      data: {
        newCategorie,
      },
    });
  }
);

/**
 * @description update category
 * @route  PATCH /api/v1/categories/:id
 * @access Private
 */

export const updateCategory = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name } = req.body;
    const category = await Category.findByIdAndUpdate(
      id,
      {
        name,
        slug: slugify(name),
      },
      {
        new: true,
      }
    );
    if (!category) {
      res.status(404).json({
        status: "fail",
        message: "No category with this id",
      });
    }
    res.status(201).json({
      status: "success",
      data: {
        category,
      },
    });
  }
);

/**
 * @description delete category
 * @route  DELETE /api/v1/categories/:id
 * @access Private
 */

export const deleteCategory = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const category = await Category.findByIdAndDelete(id);
    if (!category) {
      res.status(404).json({
        status: "fail",
        message: "No category with this id",
      });
    }
    res.status(204).json({
      status: "success",
      data: null,
    });
  }
);
