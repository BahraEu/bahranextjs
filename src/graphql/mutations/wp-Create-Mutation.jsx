"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CREAT_ARTIST = exports.CREAT_MEDIA_ITEM = exports.CREAT_EVENT = exports.CREATE_BLOG = exports.CreateCommentMutation = exports.UPDATE_ORDER = exports.UPDATE_USER = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.UPDATE_USER = graphql_tag_1.default `                
mutation  updateUser($username: String!, $email: String!, $password: String!,
    $clientMutationId: String!,$id: String!,
     $websiteUrl: String!,$roles: String!,$richEditing: String!,
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
     customerId: $customerId, customerNote: $customerNote, feeLines: {amount:$amount, id: $id,
         name: $name, taxClass: INHERIT_CART,
          taxStatus: NONE, total: $total}, id: $id,
           isPaid: false,
            lineItems: {id: $id, quantity: 10,
                 productId: 10, name: $name, metaData: {key: $key, value: $value}},
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
exports.CreateCommentMutation = graphql_tag_1.default `
    mutation createComment($content: String!, $userId: String!) {
        createComment(
            input: { clientMutationId: "createComment", userId: $userId, content: $content }
        ) {
            comment {
                content
                date
                id
                commentId
                agent
            }
        }
    }
`;
exports.CREATE_BLOG = graphql_tag_1.default `
mutation createPost( $content: String!, $date: String!, $excerpt: String!, $title: String!, $status:String! , $slug: String!, $authorId:String!){
    createPost(input: {clientMutationId: "add post", content: $content, date: $date, excerpt: $excerpt, title: $title, status: $status, slug: $slug, authorId:$authorId }) {
        post {
          content
          date
          excerpt
          id
          postId
          title
          seoTitle
          seoDescription
          featuredImage {
            node {
              id
              sourceUrl
            }
          }
        }
        clientMutationId
      }
    }
`;
exports.CREAT_EVENT = graphql_tag_1.default `
  mutation createEvent(
    $clientMutationId: String!
    $title: String!
    $status: PostStatusEnum!
    $slug: String!
    $excerpt: String!
    $date: String!
    $content: String!
    $authorId: ID!
  ) {
    createEvent(
      input: {
        clientMutationId: $clientMutationId
        title: $title
        status: $status
        slug: $slug
        excerpt: $excerpt
        date: $date
        content: $content
        authorId: $authorId
      }
    ) {
      event {
        uri
        title
        slug
        status
        previewRevisionId
        previewRevisionDatabaseId
        parentId
        parentDatabaseId
        modifiedGmt
        modified
        link
        id
        guid
        featuredImageId
        featuredImage {
          node {
            title
            sourceUrl
            id
          }
        }
      }
    }
  }
`;
exports.CREAT_MEDIA_ITEM = graphql_tag_1.default `
  mutation createMediaItem(
    $clientMutationId: String!
    $date: String!
    $altText: String!
    $caption: String!
    $authorId: String!
    $title: String!
    $status: String!
    $slug: String!
    $fileType: String!
    $filePath: String!
    $description: String!
    $dateGmt: String!
    $commentStatus: String!
  ) {
    createMediaItem(
      input: {
        clientMutationId: $clientMutationId
        date: $date
        altText: $altText
        caption: $caption
        authorId: $authorId
        title: $title
        status: $status
        slug: $slug
        fileType: $fileType
        filePath: $filePath
        description: $description
        dateGmt: $dateGmt
        commentStatus: $commentStatus
      }
    ) {
      mediaItem {
        id
        guid
        mediaItemId
        mediaItemUrl
        sizes
        slug
        sourceUrl
        uri
        title
      }
    }
  }
`;
exports.CREAT_ARTIST = graphql_tag_1.default `
mutation createMediaItem(
  $clientMutationId: String!
  $date: String!
  $altText: String!
  $caption: String!
  $authorId: String!
  $title: String!
  $status: String!
  $slug: String!
  $fileType: String!
  $filePath: String!
  $description: String!
  $dateGmt: String!
  $commentStatus: String!
) {
  createMediaItem(
    input: {
      clientMutationId: $clientMutationId
      date: $date
      altText: $altText
      caption: $caption
      authorId: $authorId
      title: $title
      status: $status
      slug: $slug
      fileType: $fileType
      filePath: $filePath
      description: $description
      dateGmt: $dateGmt
      commentStatus: $commentStatus
    }
  ) {
    mediaItem {
      id
      guid
      mediaItemId
      mediaItemUrl
      sizes
      slug
      sourceUrl
      uri
      title
    }
  }
}
`;
//# sourceMappingURL=wp-Create-Mutation.jsx.map