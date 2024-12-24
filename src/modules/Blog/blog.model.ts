import { model, Schema } from "mongoose";
import { IBlog } from "./blog.interface";

const blogSchema = new Schema<IBlog>({
    title: {
        type: String,
        required: true
    },
    blogImage: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});

export const Blog = model("Blog", blogSchema);