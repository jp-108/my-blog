import mongoose, { Schema, model }  from "mongoose";

const blogSchema = new Schema({
    title:String,
    author:String,
    content:String,
    date: { type: Date, default: Date.now },
})

const Blog = model("blogs", blogSchema)

export default Blog;