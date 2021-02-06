"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SeoFragment = `
fragment SeoFragment on PostTypeSEO{
      breadcrumbs {
        text
        url
      }
      title
      metaDesc
      metaRobotsNoindex
      metaRobotsNofollow
      opengraphAuthor
      opengraphDescription
      opengraphTitle
      opengraphImage {
        sourceUrl
      }
      opengraphSiteName
      opengraphPublishedTime
      opengraphModifiedTime
      twitterTitle
      twitterDescription
      twitterImage {
        sourceUrl
      }
}
`;
exports.default = SeoFragment;
//# sourceMappingURL=SeoFragment.jsx.map