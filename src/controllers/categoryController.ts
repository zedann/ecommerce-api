import { Request, Response } from "express";
import Category from "../models/categoryModel";

export const getCategories = (req: Request, res: Response) => {
  res.send("Category");
};
