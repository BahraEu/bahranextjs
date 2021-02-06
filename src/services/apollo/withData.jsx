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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PropTypes = __importStar(require("prop-types"));
const React = __importStar(require("react"));
const react_apollo_1 = require("react-apollo");
const head_1 = __importDefault(require("next/head"));
const initApollo_1 = __importDefault(require("./initApollo"));
const parseCookies_1 = __importDefault(require("../../utilty/parseCookies"));
exports.default = (App) => {
    // let disableStylesGeneration = true;
    var _a;
    App.displayName = 'BAHRA App';
    return _a = class WithData extends React.Component {
            constructor(props) {
                super(props);
                this.pageContext = null;
                // `getDataFromTree` renders the component first, the client is passed off as a property.
                // After that rendering is done using Next's normal rendering pipeline
                this.apolloClient = initApollo_1.default(props.apolloState, {
                    getToken: () => {
                        let WP_refreshToken = parseCookies_1.default().refreshToken;
                        let WP_authToken = parseCookies_1.default().authToken;
                        return { WP_authToken, WP_refreshToken };
                    },
                });
            }
            static async getInitialProps(ctx) {
                const { Component, router, req, res } = ctx;
                const apollo = initApollo_1.default({}, {
                    getToken: () => {
                        let refreshToken = parseCookies_1.default(req).refreshToken;
                        console.log('authToken', refreshToken);
                        let authToken = parseCookies_1.default(req).authToken;
                        console.log('authToken', authToken);
                        return { authToken, refreshToken };
                    },
                });
                ctx.apolloClient = apollo;
                let appProps = {};
                if (App.getInitialProps) {
                    appProps = await App.getInitialProps(ctx);
                }
                if (res && res.finished) {
                    // When redirecting, the response is finished.
                    // No point in continuing to render
                    return {};
                }
                if (typeof 'process' !== 'undefined' &&
                    process &&
                    process.versions &&
                    Boolean(process.versions.node)) {
                    // Run all graphql queries in the component tree
                    // and extract the resulting data
                    try {
                        //  disableStylesGeneration = true;
                        // Run all GraphQL queries
                        await react_apollo_1.getDataFromTree(<App {...appProps} Component={Component} router={router} apolloClient={apollo}/>);
                    }
                    catch (error) {
                        // Prevent Apollo Client GraphQL errors from crashing SSR.
                        // Handle them in components via the data.error prop:
                        // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
                        // tslint:disable-next-line:no-console
                        console.error('Error while running `getDataFromTree`', error);
                    }
                    // getDataFromTree does not call componentWillUnmount
                    // head side effect therefore need to be cleared manually
                    head_1.default.rewind();
                }
                // Extract query data from the Apollo's store
                const apolloState = apollo.cache.extract();
                return Object.assign(Object.assign({}, appProps), { apolloState });
            }
            render() {
                return <App {...this.props} apolloClient={this.apolloClient}/>;
            }
        },
        _a.displayName = `WithData(${App.displayName})`,
        _a.propTypes = {
            apolloState: PropTypes.object.isRequired,
        },
        _a;
};
//# sourceMappingURL=withData.jsx.map