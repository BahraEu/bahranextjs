"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADD_TO_CART = exports.CREAT_MEDIA_ITEM = exports.CREAT_EVENT = exports.CHECKOUT = exports.CREATE_BLOG = exports.CreateCommentMutation = exports.ResetUserPassword = exports.SendPasswordReset = exports.REGISTER_USER = exports.LOGIN_MUTATION = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.LOGIN_MUTATION = graphql_tag_1.default `
mutation($username: String!, $password: String!) {
    login(input: { password: $password, username: $username, clientMutationId: "loginUser" }) {
        user {
            id
            description
            avatar {
                url
            }
            email
            firstName
            jwtAuthToken
            jwtRefreshToken
            nickname
            lastName
            username
            capabilities
            comments {
                items: nodes {
                    id
                    content
                }
            }
        }
    }
}
`;
exports.REGISTER_USER = graphql_tag_1.default `
    mutation RegisterMyUser($username: String!, $email: String!, $password: String!) {
        registerUser(
            input: {
                clientMutationId: "CreateUser"
                username: $username
                email: $email
                password: $password
            }
        ) {
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
exports.SendPasswordReset = graphql_tag_1.default `
    mutation PasswordResetEmail($username: String!) {
        sendPasswordResetEmail(
            input: { clientMutationId: "PasswordResetEmail", username: $username }
        ) {
            user {
                avatar {
                    url
                }
                nicename
                lastName
                jwtAuthToken
                jwtRefreshToken
                id
                firstName
                roles {
                    nodes {
                        name
                    }
                }
                username
            }
        }
    }
`;
exports.ResetUserPassword = graphql_tag_1.default `
    mutation resetUserPassword($password: String!, $login: String!, $key: String!) {
        resetUserPassword(
            input: {
                clientMutationId: "resetUserPassword"
                password: $password
                login: $login
                key: $key
            }
        ) {
            user {
                id
            }
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
mutation createPost( $content: String!, $date: String!, $excerpt: String!,
   $title: String!, $status:String! , $slug: String!,
    $authorId:String!)
    {
    createPost(input: {clientMutationId: "add post", content: $content,
     date: $date, excerpt: $excerpt, title: $title, status: $status, slug: $slug, authorId:$authorId }) {
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
exports.CHECKOUT = graphql_tag_1.default `
  mutation checkout(
    $state: String!
    $phone: String!
    $postcode: String!
    $title: String!
    $status: String!
    $slug: String!
    $authorId: String!
    $lastName: String!
    $firstName: String!
    $email: String!
    $overwrite: Boelian!
    $password: String!
    $country: String!
    $city: String!
    $address1: String!
    $address2: String!
    $username: String!
    $transactionId: String!
    $shipToDifferentAddress: String!
    $paymentMethod: String!
    $isPaid: String!
    $customerNote: String!
  ) {
    checkout(
      input: {
        billing: {
          state: $state
          postcode: $postcode
          phone: $phone
          overwrite: $overwrite
          lastName: $lastName
          firstName: $firstName
          email: $email
          country: $country
          city: $city
          address2: $address2
          address1: $address1
        }
        account: {password: $password, username: $username}
        transactionId: $transactionId
        shipToDifferentAddress: $shipToDifferentAddress
        paymentMethod: $paymentMethod
        isPaid: $isPaid
        customerNote: $customerNote
        clientMutationId: "checkout"
      }
    ) {
      clientMutationId
      order {
        orderId
        paymentMethod
        orderNumber
        orderKey
        status
        total
        currency
      }
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
exports.ADD_TO_CART = graphql_tag_1.default `
mutation addToCart(
  $clientMutationId: String
  $productId: ID!
  $quantity: Int!
) {
  addToCart(
    input: {
      clientMutationId: $clientMutationId
      productId: $productId
      quantity: $quantity
    }
  )  {
      cart {
        total
        subtotalTax
        subtotal
        shippingTotal
        needsShippingAddress
        feeTax
        contentsTotal
        contentsTax
        chosenShippingMethod
        availableShippingMethods {
          packageDetails
          rates {
            label
            methodId
            instanceId
            id
            cost
          }
        }
        feeTotal
        totalTax
      }
    }
  }
  `;
//# sourceMappingURL=wp-mutation.js.map