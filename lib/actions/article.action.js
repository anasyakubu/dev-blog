"use server";
import Article from "../../lib/models/Article";
import { connect } from "../db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const addArticle = async (FormData) => {
  const { title, article, tag, articleImage } = Object.fromEntries(FormData);
  try {
    await connect();
    const newArticle = new Article({
      title,
      article,
      tag,
      articleImage,
    });
    await newArticle.save();
  } catch (error) {
    throw new Error("Failed To Create Article " + error);
  }
  revalidatePath("/");
  redirect("/");
};

export const updateArticle = async (FormData) => {
  const { id, title, article, tag, articleImage } =
    Object.fromEntries(FormData);
  try {
    await connect();
    const updateFields = {
      title,
      article,
      tag,
      articleImage,
    };
    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );
    await Article.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    throw new Error("Failed To Update Article " + error);
  }
  revalidatePath("/");
  redirect("/");
};

export const deleteArticle = async (FormData) => {
  const { id } = Object.fromEntries(FormData);
  try {
    await connect();
    await Article.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("Failed To Delete Article " + error);
  }
  revalidatePath("/");
};
