"use strict";
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const head_1 = __importDefault(require("next/head"));
const react_hooks_1 = require("@apollo/react-hooks");
const client_1 = require("@apollo/client");
let globalApolloClient;
/**
 * Creates and provides the apolloContext
 * to a next.js PageTree. Use it by wrapping
 * your PageComponent via HOC pattern.
 */
function withApollo(PageComponent, { ssr = true } = {}) {
    const WithApollo = (_a) => {
        var { apolloClient, apolloState } = _a, pageProps = __rest(_a, ["apolloClient", "apolloState"]);
        const client = apolloClient || initApolloClient();
        return (<react_hooks_1.ApolloProvider client={client}>
                <PageComponent {...pageProps}/>
            </react_hooks_1.ApolloProvider>);
    };
    // Set the correct displayName in development
    if (process.env.NODE_ENV !== 'production') {
        const displayName = PageComponent.displayName || PageComponent.name || 'Component';
        if (displayName === 'App') {
            console.warn('This withApollo HOC only works with PageComponents.');
        }
        WithApollo.displayName = `withApollo(${displayName})`;
    }
    if (ssr || PageComponent.getInitialProps) {
        WithApollo.getInitialProps = async (ctx) => {
            const { AppTree } = ctx;
            // Initialize ApolloClient, add it to the ctx object so
            // we can use it in `PageComponent.getInitialProp`.
            const apolloClient = (ctx.apolloClient = initApolloClient());
            // Run wrapped getInitialProps methods
            let pageProps = {};
            if (PageComponent.getInitialProps) {
                pageProps = await PageComponent.getInitialProps(ctx);
            }
            // Only on the server:
            if (typeof window === 'undefined') {
                // When redirecting, the response is finished.
                // No point in continuing to render
                if (ctx.res && ctx.res.finished) {
                    return pageProps;
                }
                // Only if ssr is enabled
                if (ssr) {
                    try {
                        // Run all GraphQL queries
                        const { getDataFromTree } = await Promise.resolve().then(() => __importStar(require('@apollo/react-ssr')));
                        await getDataFromTree(<AppTree pageProps={Object.assign(Object.assign({}, pageProps), { apolloClient })}/>);
                    }
                    catch (error) {
                        // Prevent Apollo Client GraphQL errors from crashing SSR.
                        // Handle them in components via the data.error prop:
                        // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
                        console.error('Error while running `getDataFromTree`', error);
                    }
                    // getDataFromTree does not call componentWillUnmount
                    // head side effect therefore need to be cleared manually
                    head_1.default.rewind();
                }
            }
            // Extract query data from the Apollo store
            const apolloState = apolloClient.cache.extract();
            return Object.assign(Object.assign({}, pageProps), { apolloState });
        };
    }
    return WithApollo;
}
exports.default = withApollo;
/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 * @param  {Object} initialState
 */
function initApolloClient(initialState) {
    // Make sure to create a new client for every server-side request so that data
    // isn't shared between connections (which would be bad)
    if (typeof window === 'undefined') {
        return createApolloClient(initialState);
    }
    // Reuse client on the client-side
    if (!globalApolloClient) {
        globalApolloClient = createApolloClient(initialState);
    }
    return globalApolloClient;
}
/**
 * Creates and configures the ApolloClient
 * @param  {Object} [initialState={}]
 */
function createApolloClient(initialState = {}) {
    const ssrMode = typeof window === 'undefined';
    const cache = new client_1.InMemoryCache().restore(initialState);
    // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
    return new client_1.ApolloClient({
        ssrMode,
        link: createIsomorphLink(),
        cache,
    });
}
function createIsomorphLink() {
    if (typeof window === 'undefined') {
        const { SchemaLink } = require('apollo-link-schema');
        const schema = require('../../../server/schema/schema').default;
        return new SchemaLink({ schema });
    }
    else {
        const { HttpLink } = require('apollo-link-http');
        return new HttpLink({
            uri: '/graphql',
            credentials: 'same-origin',
        });
    }
}
//# sourceMappingURL=with-apollo.jsx.map