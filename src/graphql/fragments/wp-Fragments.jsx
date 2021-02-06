"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_ABOUT_PAGE = exports.GetFirstLevelTags = exports.GET_FOOTER_SCRIPTS = exports.GET_HEADER_DATA = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.GET_HEADER_DATA = graphql_tag_1.default `
    {
        generalSettings {
            headerScripts
            title
        }
    }
`;
exports.GET_FOOTER_SCRIPTS = graphql_tag_1.default `
    {
        generalSettings {
            footerScripts
        }
    }
`;
exports.GetFirstLevelTags = graphql_tag_1.default `
    {
        tags {
            tag: nodes {
                id
                name
                tagId
            }
        }
    }
`;
exports.GET_ABOUT_PAGE = graphql_tag_1.default `
query GET_ABOUT_PAGE ($id:ID!){
    page(id: $id) {
      arab:arab_about {
        arabDiscrption
        arabTitle
        fieldGroupName
      }
      image:featuredImage {
        node {
          uri
          title
          sourceUrl
        }
      }
      seoTitle
      seoDescription
      title
      slug
      id
      content
    }
  }
  `;
//# sourceMappingURL=wp-Fragments.jsx.map