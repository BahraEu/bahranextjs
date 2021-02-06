"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UPDATE_ITEM_QUANTITIES = exports.REGISTER_CUSTOMER = exports.UPDATE_ORDER = exports.UPDATE_USER = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.UPDATE_USER = graphql_tag_1.default `                
mutation  updateUser(
  $username: String!, $email: String!, $password: String!,$clientMutationId: String!,$id: String!,$websiteUrl: String!,$roles: String!,$richEditing: String!,
     $registered: String!, $revokeJwtUserSecret: boolean,
     $refreshJwtUserSecret: false, $nickname: String!,
     $password: String!, $nicename: String!, $locale:String!, $lastName: String!,
     $jabber:String!, $email: String!, $firstName: String!,
      $password: String!, $displayName: String!,
     $description: String!,
          ) {
      updateUser(input: {clientMutationId: $clientMutationId, id: $id,
      websiteUrl: $websiteUrl, roles:$roles , richEditing: $richEditing,
      registered:$registered , revokeJwtUserSecret: $revokeJwtUserSecret,
      refreshJwtUserSecret: false, nickname:nickname ,
      password: $password, nicename: $nicename, locale: $locale, lastName:lastName ,
      jabber: $jabber, email:$email , firstName:$firstName , displayName:displayName ,
          description: $description}) {
        user {
            authToken
            refreshToken
            id
            name
            email
            nicename
        }
    }
}
`;
exports.UPDATE_ORDER = graphql_tag_1.default `
mutation  updateOrder($username: String!, $email: String!, $password: String!,
    $clientMutationId: String!,$id: String!,
     $websiteUrl: String!,$roles: String!,$richEditing: String!,
     $registered: String!, $revokeJwtUserSecret: boolean,
     $refreshJwtUserSecret: false, $nickname: String!,
     $password: String!, $nicename: String!, $locale:String!, $lastName: String!,
         $jabber:String!, $email: String!, $firstName: String!,$password: String!, $displayName: String!,
         $description: String!,
  
          ) {   
updateOrder(input: {clientMutationId: $clientMutationId, coupons: $coupons, currency: $currency,
     customerId: $customerId, customerNote: $customerNote, 
              feeLines: {amount:$amount, id: $id,
              name: $name, taxClass: INHERIT_CART,
              taxStatus: NONE, total: $total}, id: $id,
              isPaid: false,
              lineItems: {id: $id, quantity: 10,productId: 10, name: $name, 
              metaData: {key: $key, value: $value}},
               metaData: {key: $key, value: $value}, orderId: 10, parentId: 10,
               status: CANCELLED, shippingLines: {methodId: $methodId,
               methodTitle: $methodTitle, total: $total, id:$id, instanceId: $instanceId,
                metaData: {key: $key, value: $key}},
                shipping: {address1: $address1, address2: $address2, city: $city, company: $company, country: $AD, email: $email, firstName: $firstName, lastName: $lastName, overwrite: false, phone: $phone, postcode: $postcode, state: $state},
                        paymentMethodTitle: $paymentMethodTitle, paymentMethod: $paymentMethod})
order {
    billing {
      address1
      address2
    }
    date
    id
    modified
  }
}
`;
exports.REGISTER_CUSTOMER = graphql_tag_1.default `mutation registerCustomer  ($clientMutationId: String!, $id:String! ,
  $rating: Int, $agent:String!, $approved:String!, $author:String!,
  $authorIp:String!, $authorUrl:String!, $commentOn: Int!, $content:String!,
  $date:String!, $parent:String!, $userId:Int!) {

  updateReview(input: {clientMutationId: $clientMutationId, id:id , rating: 1.5, agent:$agent, approved:$approved, author:$author, authorEmail:$id, authorIp:$authorIp, authorUrl:$authorUrl, commentOn: 10, content:$content, date:$date, parent:$parent, userId: 10}}) {
    clientMutationId
    rating
    review {
      agent
      authorIp
      commentedOn {
        node {
          id
          date
          dateGmt
          uri
          slug
        }
      }
      content
      date
      replies {
        nodes {
          id
        }
      }
    }
  }
}
`;
exports.UPDATE_ITEM_QUANTITIES = graphql_tag_1.default `
mutation updateItemQuantities($clientMutationId: String!, $quantity: Int!, $keys: String!) {
  updateItemQuantities(input: {clientMutationId:$clientMutationId , items: {key:$keys , quantity:$quantity }}) {
    items {
      total
      tax
      quantity
      product {
        id
        arabicProductDescription
      }
    }
    cart {
      total
    }
  }
}
`;
//# sourceMappingURL=wp-Update-Mutation.jsx.map