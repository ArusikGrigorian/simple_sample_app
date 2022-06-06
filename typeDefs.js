const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    fullname: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
  }

  input addUserInput {
    fullname: String!
    age: Int!
    nationality: Nationality = SPAIN
  }

  input updateUserInput {
    id: ID!
    fullname: String!
    nationality: Nationality = SPAIN
  }

  type Mutation {
    addUser(input: addUserInput!): User!
    updateUser(input: updateUserInput): User!
    deleteUser(id: ID!): User!
  }

  enum Nationality {
    LITHUANIA
    SPAIN
    GREECE
    ITALY
  }
`;

module.exports = { typeDefs };
