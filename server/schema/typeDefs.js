"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = apollo_server_express_1.gql `
    type User {
        id: Int!
        email: String!
        username: String
        avatar: String
        token: String
    }

    enum SourceEnum {
        ARTICLE
        HOME_PAGE
    }

    type Subscription {
        id: ID!
        email: String!
        source: SourceEnum!
    }

    input SubscribeInput {
        email: String!
        source: SourceEnum! = HOME_PAGE
    }

    type Mutation {
        subscribe(input: SubscribeInput!): Subscription!
    }

    type Query {
        subscriptions: [Subscription]
    }
`;
exports.default = typeDefs;
//# sourceMappingURL=typeDefs.js.map