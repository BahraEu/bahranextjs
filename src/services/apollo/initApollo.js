"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isomorphic_unfetch_1 = __importDefault(require("isomorphic-unfetch"));
const createClient_1 = __importDefault(require("./createClient"));
const isBrowser = typeof window !== 'undefined';
// Polyfill fetch() on the server (used by apollo-client)
if (!isBrowser) {
    global.fetch = isomorphic_unfetch_1.default;
}
let apolloClient;
function initApollo(initialState, options) {
    // Make sure to create a new client for every server-side request so that data
    // isn't shared between connections (which would be bad)
    if (!isBrowser) {
        return createClient_1.default(initialState, options);
    }
    // Reuse client on the client-side
    if (!apolloClient) {
        apolloClient = createClient_1.default(initialState, options);
    }
    return apolloClient;
}
exports.default = initApollo;
//# sourceMappingURL=initApollo.js.map