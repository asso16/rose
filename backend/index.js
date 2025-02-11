const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const MONGODB_URI = process.env.MONGODB_URI;
const cors = require("cors");
const {
  creatblog,
  deleteblog,
  getblog,
  updateblog,
} = require("./Controllers/Blog");
app.use(express.json());
app.use(cors());
app.post("/blog", creatblog);
app.delete("/blog/:id", deleteblog);
app.get("/blog", getblog);
app.put("/blog/:id", updateblog);
app.listen(process.env.PORT || 5000, () => {
  mongoose
    .connect(MONGODB_URI)
    .then(() => {
      console.log("connected to mongo");
    })
    .catch((err) => {
      console.log(err);
    });
  console.log("server is running");
});
