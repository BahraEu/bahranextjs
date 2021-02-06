"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetFirstLevelPosts = exports.GET_POST_BIJ_ID = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.GET_POST_BIJ_ID = graphql_tag_1.default `
  query postBy($postId: Int) {
    postBy(postId:$postId) {
      id
      date
      slug
      excerpt
      content
      title
      postId
      dateGmt
      commentCount
      commentStatus
      status
      uri
      modifiedGmt
      modified
      isPreview
      guid
      featuredImageId
   
      author {
        node {
          id
          userId
          username
        }
      }
      authorId
      categories {
        nodes {
          slug
          id
          name
        }
      }
      comments {
        nodes {
          content
          date
          id
        }
      }
      tags {
        nodes {
          name
          id
          count
        }
      }
      image: featuredImage {
        node {
          sourceUrl
          id
          status
          altText
          date
          dateGmt
          databaseId
          title
          enqueuedStylesheets {
            nodes {
              args
              id
              src
            }
          }
        }
      }
      enqueuedStylesheets {
        nodes {
          id
          src
          args
          extra
          handle
          version
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
      }
      enqueuedScripts {
        nodes {
          src
          id
          args
          extra
          handle
          version
        }
      }
  
    }
  }
`;
exports.GetFirstLevelPosts = graphql_tag_1.default `
query MyQuery {
    posts {
      items: nodes {
        postId
        id
        slug
        title
        date
        tags {
          items: nodes {
            id
            name
          }
        }
        content
        comments {
          items: nodes {
            id
            content
            date
          }
        }
        excerpt
        image: featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }

`;
//# sourceMappingURL=wp-query-blog.js.map