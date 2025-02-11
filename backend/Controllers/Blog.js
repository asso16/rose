const {blog} = require("../Model/blog");
//post
async function creatblog(req, res) {
  try {
    const givenblog = req.body;
    console.log(givenblog);
    if(
      !givenblog.title ||
      !givenblog.body
    ){
      return res.status(400).json(
        {message:"SOMTHING IS MISSING "}
      )};

    const createdblog = await blog.create({
      title: req.body.title,
      body: req.body.body,
    });
    res.status(201).json(createdblog);
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
}
// delete
async function deleteblog(req, res) {
  try {
    const { id } = req.params;
    await blog.deleteOne({
      _id: id,
    });
    res.json({ message: "blog deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Internal server error" });
  }
}
// get
async function getblog(req, res) {
  try {
    const blog1 = await blog.find({
    });
    console.log(blog1);
    res.json(blog1);
  } catch (error) {
    res.status(400).json({ message: "Internal server error" });
  }
}
//put
async function updateblog(req, res) {
  try {
    const newBlog = req.body;
    const { id } = req.params;
    const blogexist = await blog.findOne({
      _id: id,
    });
    if (!blogexist) {
      res.status(400).json({ message: "blog not found" });
      return
    }
    if (!newBlog){
      res.status(400).json({ message: "pls provide a blog to update" });
      return
    }
    const blog1 = await blog.updateOne(
      {
        _id: id,
      },
      {
        title: req.body.title,
        body: req.body.body,
      }
    );
    console.log(blog1);
    res.json(blog1);
  } catch (error) {
    res.status(400).json({ message: "Internal server error" });
  }
}
module.exports = { creatblog, deleteblog, getblog, updateblog };