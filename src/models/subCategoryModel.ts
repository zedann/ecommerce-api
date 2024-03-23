import mongoose from "mongoose";

const subCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for this Sub Category"],
      unique: true,
      trim: true,
      maxlength: [32, "Sub Category name can not be more than 32 characters"],
      minLength: [3, "Sub Category name can not be less than 3 characters"],
    },
    slug: {
      type: String,
      lowercase: true,
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
      require: [true, "the SubCategory must belong to parent category"],
    },
  },
  { timestamps: true },
);
const SubCategory = mongoose.model("SubCategory", subCategorySchema);

export default SubCategory;
