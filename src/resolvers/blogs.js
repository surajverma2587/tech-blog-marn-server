const { Blog } = require("../models");

const blogs = async (_, { userId }) => {
  let blogs;
  if (userId) {
    blogs = await Blog.find({ user: userId }).populate("user");
  } else {
    blogs = await Blog.find({}).populate("user");
  }
  return blogs;
};

module.exports = blogs;
