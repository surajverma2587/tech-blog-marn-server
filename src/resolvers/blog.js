const { Blog } = require("../models");

const blog = async (_, { id }) => {
  const blog = await Blog.findById(id).populate("user");
  return blog;
};

module.exports = blog;
