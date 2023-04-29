import express from "express";
import cors from "cors";
import "./db/config.js";
import Blog from "./db/Blog.js"

const app = express();
app.use(cors());
app.use(express.json())

// Post method for creating a new blog

app.post("/addblog", async(req, res)=>{
    let blog = await Blog.create({
        title:req.body.title,
        author:req.body.author,
        content:req.body.content,
    });
    res.send(blog);
})

// Get method for getting all blogs

app.get("/getblogs", async(req,res)=>{
    let blog = await Blog.find()
    res.send(blog)
})


// Get single blog using get method fro id
app.get("/updateblog/:id", async(req,res)=>{
    let blog = await Blog.findById(req.params.id)
    res.send(blog)
})

// Get blog details for update
app.get("/updateblog/:id",  async (req, res) => {
    let result = await Blog.findOne({ _id: req.params.id });
    if (result) {
      res.send(result);
    } else {
      res.send("No Result Found");
    }
  });

// Update blog using put method
app.put("/updateblog/:id", async(req,res)=>{
    let blog = await Blog.updateOne(
        {_id:req.params.id},
        {$set:req.body}
        )
    res.send(blog)
})

// Blog searching by Author Name

app.get("/search/:key", async (req, res) => {
    let result = await Blog.find({
      $or: [
        { author: { $regex: req.params.key } },
      ],
    });
    res.send(result);
  });

// Delete blog using Delete method
app.delete("/deleteblog/:id", async(req,res)=>{
    let blog = await Blog.deleteOne({_id:req.params.id})
    res.send(blog)
})



app.get('/articles/:author', async (req, res) => {
 
    try {
      const articles = await Blog.find({
        author: req.params.author,
      })
      res.json(articles);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });



app.listen(8000);

