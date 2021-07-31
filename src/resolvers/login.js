const { AuthenticationError } = require("apollo-server");

const { User } = require("../models");
const { signToken } = require("../utils/auth");

const login = async (_, { email, password }) => {
  const user = await User.find({ email });

  if (!user) {
    throw new AuthenticationError("User does not exist");
  }

  const isValidPassword = user.validatePassword(password);

  if (!isValidPassword) {
    throw new AuthenticationError("Failed login");
  }

  delete user.password;

  const token = signToken(user);

  return {
    token,
    user,
  };
};

module.exports = login;
