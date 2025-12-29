const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1/social");

const Post = mongoose.model("Post", {
  text: String,
  likes: Number
});

app.post('/post', async (req, res) => {
  await Post.create({text: req.body.text, likes: 0});
  res.send("Posted");
});

app.listen(3000, ()=> console.log("Server Started"));