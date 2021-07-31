const { gql } = require("apollo-server");

const typeDefs = gql`
  type Blog {
    id: ID!
    title: String!
    content: String!
  }
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
  }
  type Auth {
    token: ID!
    user: User!
  }
  type Query {
    blogs(userId: ID): [Blog]
    blog(id: ID!): Blog
  }
  input LoginInput {
    email: String!
    password: String!
  }
  input SignUpInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }
  input BlogInput {
    id: ID
    title: String!
    content: String!
  }
  type Mutation {
    login(input: LoginInput!): Auth
    signUp(input: SignUpInput!): Auth
    createBlog(input: BlogInput!): Blog
    updateBlog(input: BlogInput!): Blog
    deleteBlog(id: ID!): ID!
  }
`;

module.exports = typeDefs;
