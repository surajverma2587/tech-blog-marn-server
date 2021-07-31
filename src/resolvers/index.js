const login = require("./login");
const signUp = require("./signUp");
const createBlog = require("./createBlog");
const updateBlog = require("./updateBlog");
const deleteBlog = require("./deleteBlog");
const blogs = require("./blogs");
const blog = require("./blog");

const resolvers = {
  Query: {
    blogs,
    blog,
  },
  Mutation: {
    login,
    signUp,
    createBlog,
    updateBlog,
    deleteBlog,
  },
};

module.exports = resolvers;
