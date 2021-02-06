"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkLoggedIn = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const checkLoggedIn = (apolloClient) => apolloClient.query({
    fetchPolicy: 'cache-first',
    query: graphql_tag_1.default `
    mutation LoginUser($username: String!, $password: String!) {
      login(
        input: {
          clientMutationId: "uniqueId"
          username: $username
          password: $password
        }
      ) {
        authToken
        user {
          id
          name
        }
      }
    }
    `
});
exports.checkLoggedIn = checkLoggedIn;
//# sourceMappingURL=checkLoggedIn.js.map