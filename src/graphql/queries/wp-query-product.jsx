"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetFirstLevelproducts = exports.GET_PRODUCT_BIJ_ID = void 0;
const Product_1 = require("@graphql/fragments/Product");
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.GET_PRODUCT_BIJ_ID = graphql_tag_1.default `
  query Product($id: ID!) {
    product(id: $id) {
        id
        totalSales
        status
        slug
        sku
        shortDescription
        dateOnSaleFrom
        date
        catalogVisibility
        averageRating
        featured
        description
        dateOnSaleTo
        name
        productId
        purchasable
        purchaseNote
        onSale
        modified
        menuOrder
        link
       
        galleryImages {
            nodes {
              mediaItemUrl
              mediaItemId
              sourceUrl
              title
              status
            }
          }
          image {
            sourceUrl
            status
            title
            id
            sizes
            mimeType
          }
       
      }
    }
`;
exports.GetFirstLevelproducts = graphql_tag_1.default `
  query MyQuery {
    products {
      items: nodes {
        featured
        description
        onSale
        name
        modified
        menuOrder
        purchaseNote
        reviews {
          nodes {
            id
            date
            content
            commentId
            authorIp
          }
        }
        status
        slug
        sku
        shortDescription
        galleryImages {
          items: nodes {
            sourceUrl
            title
          }
        }
        productCategories {
          items: nodes {
            name
          }
        }
        productTags {
          items: nodes {
            name
          }
        }
     
        arabicProductDescription {
          arabArtistName
          arabExerptPorductsInfo
          arabPorductsInfo
          arabPorductsName
          fieldGroupName
          price
        }       
        image {
          date
          id
          slug
          sourceUrl
          title
          uri
        }
        ...SimpleProduct
      }
    }
  }
  ${Product_1.SimpleProductFragment}
  ${Product_1.VariableProductFragment}
  ${Product_1.GroupProductFragment}
`;
//# sourceMappingURL=wp-query-product.jsx.map