import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    article: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
    articleImage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose?.models?.Article ||
  mongoose.model("Article", ArticleSchema);
