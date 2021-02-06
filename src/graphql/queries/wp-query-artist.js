"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetFirstLevelArtist = exports.GET_ARTIST_BIJ_ID = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.GET_ARTIST_BIJ_ID = graphql_tag_1.default `
  query Artist($id: Int!) {
    artistBy(artistId: $id) {
      id
      image: featuredImage {
        node{
        sourceUrl
        }
      }
      slug
      title
      excerpt
      date
      artistId
    }
  }

`;
exports.GetFirstLevelArtist = graphql_tag_1.default `
  query MyQuery {
    artists {
      items: nodes {
        id
        title
        slug
        excerpt
        date
        artistId
        image: featuredImage {
          node{
            sourceUrl
          }
          
        }
      }
    }
  }
`;
//# sourceMappingURL=wp-query-artist.js.map