"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_ALL_WP_USERS = exports.WP_USER = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.WP_USER = graphql_tag_1.default `
query user($id: ID!) {
    user(id: $id) {
        username
        userId
        roles {
          nodes {
            capabilities
            id
            name
            isRestricted
            displayName
          }
        }
        id
        lastName
        locale
        name
        nicename
        nickname
        posts {
          nodes {
            id
            excerpt
          }
        }
        firstName
        extraCapabilities
        mediaItems {
          nodes {
            title
            sourceUrl
            date
            id
          }
        }
        avatar {
          rating
          size
          url
          width
          default
        }
        capabilities
        comments {
          nodes {
            commentId
            date
            databaseId
            content
            id
            dateGmt
            replies {
              nodes {
                id
                dateGmt
                date
                commentId
              }
            }
          }
        }
        email
        description
      }
      users {
        nodes {
          id
        }
      }
    }
`;
exports.GET_ALL_WP_USERS = graphql_tag_1.default `
{
  users {
    nodes {
      id
      databaseId
      description
      mediaItems {
        nodes {

            id

        }
      }
      name
      email
      roles {
        nodes {
          id
          name
          displayName
        }
      }
      avatar {
        url
      }
      username
      posts {
        nodes {
          id
          title
          content
        }
      }
      events {
        nodes {
          id
          title
          content
        }
      }
      userId
      slug
    }
  }
}
`;
//# sourceMappingURL=wp-user.jsx.map