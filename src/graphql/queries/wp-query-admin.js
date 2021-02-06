"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_TEAM = exports.GET_ADMIN_BIJ_ID = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const SeoFragment_1 = __importDefault(require("../fragments/SeoFragment"));
exports.GET_ADMIN_BIJ_ID = graphql_tag_1.default `
    query Admin($id: Int!) {
        adminBy(adminId: $id) {
                        date
                        slug
                        content
                        adminId
                        dateGmt
                        title
                        uri
                        status
                        seo {
                          canonical
                          cornerstone
                          metaDesc
                          focuskw
                          metaRobotsNofollow
                          opengraphDescription
                          opengraphModifiedTime
                          opengraphPublishedTime
                          metaRobotsNoindex
                          opengraphAuthor
                          opengraphPublisher
                          opengraphSiteName
                          opengraphTitle
                          opengraphType
                          opengraphUrl
                          title
                          twitterDescription
                          twitterTitle
                          twitterImage {
                            id
                            sourceUrl(size: BAHRA_FULLSCREEN)
                            authorId
                          }
                        }
                        featuredImageId
                        modifiedGmt
                        previewRevisionId
                        isPreview
                        desiredSlug
                        databaseId
                      }
                    }
          
`;
exports.GET_TEAM = graphql_tag_1.default `
query BahraTeam{
 team {
        nodes {
          id
          uri
          title
          status
          adminId
          content
          image: featuredImage {
            node {
              sourceUrl
            }
          }
          databaseId
          date
          dateGmt
          desiredSlug
          enclosure
          featuredImageDatabaseId
          featuredImageId
          guid
          isPreview
          isRestricted
          link
          modified
          modifiedGmt
          previewRevisionDatabaseId
          previewRevisionId
          seo {
            ...SeoFragment
          }
    
        }
      }
    }
          ${SeoFragment_1.default}

`;
//# sourceMappingURL=wp-query-admin.js.map