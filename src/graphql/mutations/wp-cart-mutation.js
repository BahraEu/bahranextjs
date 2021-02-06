"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.REMOVE_FROM_CART = exports.ADD_TO_CART = exports.CHECKOUT = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
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
exports.REMOVE_FROM_CART = graphql_tag_1.default `
  mutation removeItemsFromCart($clientMutationId:String!, $all: Boolean!, $keys:String! )
            {
           removeItemsFromCart(input: {clientMutationId: $clientMutationId, all: $all, keys:$keys }) {
        cart {
          contents {
            nodes {
              key
              total
            }
          }
    }
  }
}
`;
//# sourceMappingURL=wp-cart-mutation.js.map