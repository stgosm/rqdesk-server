const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    status: String
    users: [User]
    areas: [Area]
    requirements: [Requirement]
  }

  type Mutation {
    createUser(input: InputCreateUser!): User
    createArea(input: InputCreateArea!): Area
    createRequirement(input: InputCreateRequirement!): Requirement
  }

  type User {
    _id: ID
    userName: String
    userFirstName: String
    userLastName: String
    userEmail: String
    userPassword: String
    userRole: String
  }

  type Area {
    areaName: String
    areaDescription: String
  }

  type Requirement {
      _id: ID
      rqName: String
      rqDescription: String
      rqStatus: String
      rqTags: [String]
      rqArea: Area
      rqUser: String
  }

  input InputCreateUser {
    userName: String!
    userFirstName: String!
    userLastName: String!
    userEmail: String!
    userPassword: String!
    userRole: String!
  }

  input InputCreateRequirement {
    rqName: String!
    rqDescription: String!
    rqTags: [String]
    rqArea: String!
    rqUser: String!
  }

  input InputCreateArea {
    areaName: String!
    areaDescription: String
  }
`;

module.exports = typeDefs; 