const { mongoose } = require("mongoose");
const blog = mongoose.model(
  "blogs",
  mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    }, 
  })
);
module.exports = { blog };
