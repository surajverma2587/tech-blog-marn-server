const { User } = require("../models");
const { signToken } = require("../utils/auth");

const signUp = async (_, { firstName, lastName, email, password }) => {
  const user = await User.create({ firstName, lastName, email, password });

  delete user.password;

  const token = signToken(user);

  return {
    token,
    user,
  };
};

module.exports = signUp;
