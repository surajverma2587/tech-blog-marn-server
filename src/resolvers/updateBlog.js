const { AuthenticationError } = require("apollo-server");

const { Blog } = require("../models");

const updateBlog = async (_, { input }, context) => {
  if (context.user) {
    const { title, content, user, id } = input;

    if (user === context.user.id) {
      const blog = await Blog.findByIdAndUpdate(
        id,
        {
          title,
          content,
        },
        { new: true }
      ).populate("user");

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

module.exports = updateBlog;
