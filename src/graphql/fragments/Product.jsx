"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupProductFragment = exports.VariableProductFragment = exports.ExternalProductFragment = exports.SimpleProductFragment = void 0;
exports.SimpleProductFragment = `
fragment SimpleProduct on SimpleProduct {
  catalogVisibility
  date
  dateOnSaleFrom
  dateOnSaleTo
  defaultAttributes {
    edges {
      node {
        id
      }
    }
  }
  description
  featured
  galleryImages {
    edges {
      node {
        id
      }
    }
  }
  globalAttributes {
    edges {
      node {
        id
      }
    }
  }
  id
  image {
    id
  }
  link
  localAttributes {
    edges {
      node {
        id
      }
    }
  }
  menuOrder
  metaData {
    id
  }
  modified
  name
  onSale
  paArtists {
    edges {
      node {
        id
      }
    }
  }
  parent {
    id
  }
  price
  productCategories {
    edges {
      node {
        id
      }
    }
  }
  productTags {
    edges {
      node {
        id
      }
    }
  }
  purchasable
  purchaseNote
  regularPrice
  related {
    edges {
      node {
        id
      }
    }
  }
  reviewCount
  reviews {
    edges {
      node {
        id
      }
    }
  }
  reviewsAllowed
  salePrice
  shippingClasses {
    edges {
      node {
        id
      }
    }
  }
  shortDescription
  sku
  slug
  status
  taxClass
  taxStatus
  totalSales
  type
  upsell {
    edges {
      node {
        id
      }
    }
  }
  visibleProducts {
    edges {
      node {
        id
      }
    }
  }
  arabicProductDescription {
    arabArtistName
    arabExerptPorductsInfo
    arabPorductsInfo
    arabPorductsName
    
  }
type
status
slug
sku
      }
    `;
exports.ExternalProductFragment = `
  fragment ExternalProduct on ExternalProduct{
    attributes {
      edges {
        node {
          id
        }
      }
    }
averageRating
buttonText
catalogVisibility
date
dateOnSaleFrom
dateOnSaleTo
defaultAttributes {
edges {
 node {
   id
 }
}
}
description
externalUrl
featured
galleryImages {
edges {
 node {
   id
 }
}
}
globalAttributes {
edges {
 node {
   id
 }
}
}
id
image {
id
}
link
localAttributes {
edges {
 node {
   id
 }
}
}
menuOrder
metaData {
id
}
modified
name
onSale
paArtists {
edges {
 node {
   id
 }
}
}
parent {
id
}
price
productCategories {
edges {
 node {
   id
 }
}
}
productId
productTags {
edges {
 node {
   id
 }
}
}
productTypes {
edges {
 node {
   id
 }
}
}
purchasable
purchaseNote
regularPrice
related {
edges {
 node {
   id
 }
}
}
reviewCount
reviews {
edges {
 node {
   id
 }
}
}
reviewsAllowed
salePrice
shippingClasses {
edges {
 node {
   id
 }
}
}
shortDescription
sku
slug
status
taxClass
taxStatus
totalSales
type
upsell {
edges {
 node {
   id
 }
}
}
visibleProducts {
edges {
 node {
   id
 }
}
}
}`;
exports.VariableProductFragment = `
fragment VariableProduct on VariableProduct {
  attributes {
    edges {
      node {
        id
      }
    }
  }
  averageRating
  backorders
  backordersAllowed
  catalogVisibility
  crossSell {
    edges {
      node {
        id
      }
    }
  }
  date
  dateOnSaleFrom
  dateOnSaleTo
  defaultAttributes {
    edges {
      node {
        id
      }
    }
  }
  description
  featured
  galleryImages {
    edges {
      node {
        id
      }
    }
  }
  globalAttributes {
    edges {
      node {
        id
      }
    }
  }
  height
  id
  image {
    id
  }
  length
  link
  manageStock
  menuOrder
  metaData {
    id
  }
  modified
  name
  onSale
  paArtists {
    edges {
      node {
        id
      }
    }
  }
   parent {
     id
   }
  price
  productCategories {
    edges {
      node {
        id
      }
    }
  }
  productId
  productTags {
    edges {
      node {
        id
      }
    }
  }
  productTypes {
    edges {
      node {
        id
      }
    }
  }
  purchasable
  purchaseNote
  regularPrice
  related {
    edges {
      node {
        id
      }
    }
  }
  reviewCount
  reviews {
    edges {
      node {
        id
      }
    }
  }
  reviewsAllowed
  salePrice
  shippingClassId
  shippingClasses {
    edges {
      node {
        id
      }
    }
  }
  shippingRequired
  shippingTaxable
  shortDescription
  sku
  slug
  soldIndividually
  status
  stockQuantity
  taxClass
  taxStatus
  totalSales
  type
  upsell {
    edges {
      node {
        id
      }
    }
  }
  variations {
    edges {
      node {
        id
      }
    }
  }
  visibleProducts {
    edges {
      node {
        id
      }
    }
  }
  weight
  width 
}`;
exports.GroupProductFragment = `
fragment GroupProduct on GroupProduct{
  addToCartDescription
  addToCartText
  averageRating
  date
  dateOnSaleFrom
  dateOnSaleTo
  featured
  galleryImages {
    edges {
      node {
        id
      }
    }
  }
  globalAttributes {
    edges {
      node {
        id
      }
    }
  }
  id
  image {
    id
  }
  link
  menuOrder  
  modified
  name
  onSale
  parent {
    id
  }
  productCategories {
    edges {
      node {
        id
      }
    }
  }
  productId
  productTags {
    edges {
      node {
        id
      }
    }
  }
  productTypes {
    edges {
      node {
        id
      }
    }
  }
  products {
    edges {
      node {
        id
      }
    }
  }
  purchasable
  purchaseNote
  related {
    edges {
      node {
        id
      }
    }
  }
  reviewCount
  reviews {
    edges {
      node {
        id
      }
    }
  }
  reviewsAllowed
  shippingClasses {
    edges {
      node {
        id
      }
    }
  }
  shortDescription
  sku
  slug
  status
  totalSales
  type
  upsell {
    edges {
      node {
        id
      }
    }
  }
        id
        name
        arabicProductDescription {
          arabArtistName
          arabExerptPorductsInfo
          arabPorductsInfo
          arabPorductsName
          artistName {
            ... on Artist {
              id
            }
          }
          fieldGroupName
          price
        }
}`;
//# sourceMappingURL=Product.jsx.map