const { AuthenticationError } = require("apollo-server");

const { Blog } = require("../models");

const createBlog = async (_, { input }, context) => {
  if (context.user) {
    const { title, content, user } = input;

    if (user === context.user.id) {
      const blog = await Blog.create({ title, content });

      return blog;
    } else {
      throw new AuthenticationError(
        "User not authorised to perform this action."
      );
    }
  } else {
    throw new AuthenticationError(
      "User not authorised to perform this action."
    );
  }
};

module.exports = createBlog;
