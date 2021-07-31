const { Schema, model } = require("mongoose");

const schema = {
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
};

const blogSchema = new Schema(schema);

const Blog = model("Blog", blogSchema);

module.exports = Blog;
