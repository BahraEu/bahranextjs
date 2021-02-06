"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const app_1 = __importDefault(require("next/app"));
const react_apollo_1 = require("react-apollo");
const mobx_react_1 = require("mobx-react");
const i18n_1 = require("../i18n");
const withData_1 = __importDefault(require("../src/services/apollo/withData"));
const head_1 = __importDefault(require("next/head"));
const utilty_1 = require("../src/utilty");
const auth_functions_1 = require("../src/utilty/auth-functions");
const parseCookies_1 = __importDefault(require("../src/utilty/parseCookies"));
const authProvider_1 = __importDefault(require("./auth/authProvider"));
const store_1 = require("../src/services/stores/store");
const router_1 = require("next/router");
const wp_user_1 = require("../src/graphql/queries/wp-user");
const mobx_react_lite_1 = require("mobx-react-lite");
// there is no window object on the server
mobx_react_lite_1.enableStaticRendering(typeof window === "undefined");
// on the server
mobx_react_lite_1.enableStaticRendering(true);
// in the browser
mobx_react_lite_1.enableStaticRendering(false);
class MyApp extends app_1.default {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            users: undefined,
            isLogedIn: false,
            width: '',
            height: ''
        };
        this.user = async () => {
            if (!auth_functions_1.isEmpty(this.props.pageProps.userID)) {
                let id = this.props.pageProps.userID;
                this.props.apolloClient.query({ query: wp_user_1.WP_USER,
                    variables: { id: id },
                }).then(async (res) => {
                    const wpUser = res.data.user;
                    await this.mobxStore.userStore.createUser(wpUser);
                    this.setState(true);
                    return { user: wpUser };
                }).catch((err) => console.error(err));
            }
            else {
                undefined;
            }
        };
        this.mobxStore = utilty_1.isServer
            ? props.pageProps.RootState
            : store_1.initializeStore(props.pageProps.RootState);
    }
    static async getInitialProps({ Component, ctx }) {
        const userID = utilty_1.isServer ? parseCookies_1.default(ctx.req).userID : localStorage.getItem('userID');
        let Language = utilty_1.isServer ? parseCookies_1.default(ctx.req).language : localStorage.getItem('language');
        // create a store with the initial state
        const mobxStore = store_1.initializeStore();
        ctx.mobxStore = mobxStore;
        const basePageProps = {
            Language,
            userID: userID,
            RootState: mobxStore,
            router: router_1.Router
        };
        let pageProps = Object.assign({}, basePageProps);
        if (Component.getInitialProps) {
            // inject the basePageProps in the parameters of getInitialProps
            pageProps = await Component.getInitialProps(Object.assign(Object.assign({}, basePageProps), ctx));
            // return the basePageProps inside the pageProps
            pageProps = Object.assign(Object.assign({}, basePageProps), pageProps);
        }
        return {
            pageProps,
        };
    }
    handleResize() {
        // Set window width/height to state
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }
    async componentDidMount() {
        let user = this.state.user;
        if (auth_functions_1.isEmpty(user)) {
            this.user();
        }
        else {
            this.setState({ isLogedIn: true });
        }
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles && jssStyles.parentNode)
            jssStyles.parentNode.removeChild(jssStyles);
    }
    render() {
        const { Component, pageProps, apolloClient } = this.props;
        console.log('MyApp this.mobxStore', this.mobxStore);
        console.log('MyApp this.props', this.props);
        console.log('MyApp State', this.state);
        const FaviconImage = require('../public/images/icons/bahra-icon-120x120.png');
        return (<>
                <head_1.default>
                    <title>Hello, BAHRA</title>
                    <link rel="shortcut icon" href={FaviconImage}/>
                </head_1.default>
                <mobx_react_1.Provider store={this.mobxStore}>
                    <react_apollo_1.ApolloProvider client={apolloClient}>
                        <authProvider_1.default user={this.state.user} {...pageProps} Component={Component} pageProps={pageProps}/>
                    </react_apollo_1.ApolloProvider>
                </mobx_react_1.Provider>
            </>);
    }
}
exports.default = withData_1.default(i18n_1.appWithTranslation(MyApp));
//# sourceMappingURL=_app.jsx.map