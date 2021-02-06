"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetFirstLevelEvents = exports.GET_EVENT_BIJ_ID = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.GET_EVENT_BIJ_ID = graphql_tag_1.default `
    query Event($id: Int!) {
        eventBy(eventId: $id) {
          title
          excerpt
          id
          authorId
          authorDatabaseId
          commentCount
          commentStatus
          content
          databaseId
          date
          dateGmt
          desiredSlug
          enclosure
          eventId
          featuredImageDatabaseId
          featuredImageId
          guid
          isPreview
          isRestricted
          isRevision
          link
          modified
          modifiedGmt
          parentDatabaseId
          parentId
          slug
          status
        }
      }
      
`;
exports.GetFirstLevelEvents = graphql_tag_1.default `
  query MyQuery {
  
      events {
        items: nodes {
          id
          title
          date
          dateGmt
          desiredSlug
          enclosure
          eventId
          excerpt
          featuredImageDatabaseId
          featuredImageId
          guid
          isPreview
          isRestricted
          isRevision
          link
          modified
          modifiedGmt
          parentDatabaseId
          parentId
          previewRevisionId
          status
          slug
          authorId
        }
      }
    
  }
`;
//# sourceMappingURL=wp-query-event.js.map