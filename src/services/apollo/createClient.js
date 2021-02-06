"use strict";
// tslint:disable: no-console
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_client_1 = require("apollo-client");
const apollo_link_1 = require("apollo-link");
const apollo_link_context_1 = require("apollo-link-context");
const apollo_link_error_1 = require("apollo-link-error");
const apollo_link_http_1 = require("apollo-link-http");
const apollo_link_logger_1 = __importDefault(require("apollo-link-logger"));
const createCache_1 = __importDefault(require("./createCache"));
const config_1 = __importDefault(require("../../../config/config"));
//import { WebSocketLink } from "@apollo/client/link/ws";
const helpers_1 = require("../../utilty/helpers");
const parseCookies_1 = __importStar(require("../../utilty/parseCookies"));
const lodash_1 = require("lodash");
const link = apollo_link_1.from([
    // Log queries to console
    ...(config_1.default.DEV ? [apollo_link_logger_1.default] : []),
    // Create Error linking
    apollo_link_error_1.onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
            graphQLErrors.map(({ message, locations, path }) => {
                console.error(`\n\n[GraphQL error]: ${message} \n location: ${JSON.stringify(locations, null, 2)} \n path: ${path}\n\n`);
            });
        }
        if (networkError) {
            console.error(`[Network error]: ${JSON.stringify(networkError, null, 2)}`);
        }
    }),
    new apollo_link_http_1.HttpLink({
        credentials: 'same-origin',
        useGETForQueries: false,
        uri: 'https://bahra.eu/admin/index.php?graphql',
    }),
]);
const authLink = (getToken) => apollo_link_context_1.setContext((_, { headers }) => {
    const WP_tokens = getToken();
    let refreshToken = parseCookies_1.default().refreshToken;
    const IsTokenExpired = helpers_1.checkTokenIsExpired(WP_tokens.WP_authToken);
    let token = WP_tokens.WP_authToken;
    if (!lodash_1.isEmpty(token)) {
        return {
            headers,
        };
    }
    if (!IsTokenExpired) {
        return createHeaders(token, headers);
    }
    else {
        try {
            parseCookies_1.removeMapInCookie(['authToken'], token);
            const { token: refreshedAccessToken } = WP_tokens.WP_refreshTokens;
            if (!refreshedAccessToken) {
                helpers_1.checkTokenIsExpired(refreshToken);
            }
            else {
                throw new Error();
            }
            return createHeaders(refreshedAccessToken, headers);
        }
        catch (error) {
            return {
                headers,
            };
        }
    }
});
function createHeaders(token, oldHeaders) {
    return {
        headers: Object.assign({ Authorization: `Bearer ${token}` }, oldHeaders),
    };
}
const create = (initialState, { getToken }) => new apollo_client_1.ApolloClient({
    cache: createCache_1.default.restore(initialState || {}),
    connectToDevTools: true,
    link: authLink(getToken).concat(link),
    queryDeduplication: true,
    ssrMode: Boolean(typeof 'process' !== 'undefined' &&
        process &&
        process.versions &&
        Boolean(process.versions.node)),
});
exports.default = create;
//# sourceMappingURL=createClient.js.map