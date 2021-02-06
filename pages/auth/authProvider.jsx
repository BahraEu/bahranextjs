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
const react_1 = __importStar(require("react"));
const auth_functions_1 = require("../../src/utilty/auth-functions");
const spinner_1 = __importDefault(require("../../src/styles/spinner/spinner"));
const context_1 = require("../../src/utilty/context");
const cookie_1 = __importDefault(require("cookie"));
const parseCookies_1 = __importDefault(require("../../src/utilty/parseCookies"));
const utilty_1 = require("../../src/utilty");
const bahraProviders_1 = __importDefault(require("./bahraProviders"));
const index_1 = require("../../src/styles/theme/index");
const AuthProvider = props => {
    const initialLoginState = {
        isLoading: true,
        userID: null,
        token: null,
        RefreshToken: null,
        user: props.user,
    };
    // const client = useApolloClient()
    const loginReducer = (prevState, action) => {
        switch (action.type) {
            case 'USER':
                return Object.assign(Object.assign({}, prevState), { user: action.setUser, isLoading: false });
            case 'RETRIEVE_TOKEN':
                return Object.assign(Object.assign({}, prevState), { token: action.token, RefreshToken: action.RefreshToken, userID: action.userID, isLoading: false });
            case 'LOGIN':
                return Object.assign(Object.assign({}, prevState), { userID: action.userID, token: action.token, RefreshToken: action.RefreshToken, isLoading: false });
            case 'LOGOUT':
                return Object.assign(Object.assign({}, prevState), { userID: null, authToken: null, RefreshToken: null, isLoading: false });
            case 'REGISTER':
                return Object.assign(Object.assign({}, prevState), { userID: action.userID, token: action.jwtAuthToken, RefreshToken: action.RefreshToken, isLoading: false });
        }
    };
    const [loginState, dispatch] = react_1.default.useReducer(loginReducer, initialLoginState);
    const [user, setUser] = react_1.useState(props.user);
    const authContext = react_1.default.useMemo(() => ({
        user,
        // setUser: async ( userID:string) => {
        //     if (!isEmpty(userID)) {
        //         async (userID)=>{
        //                 await props.apolloClient.query({ query:WP_USER,
        //                   variables:{id:userID},
        //                 }).then( async(data) => {
        //                   console.log('ddddddddddddddddddddddddddddd',data)
        //                   const wpUser = data.user;
        //                   console.log('wpUser', wpUser);
        //                   setUser({user:wpUser})
        //                   return wpUser
        //                 }).catch((err)=>console.error(err)
        //                 )
        //         }
        //     }
        //     dispatch({ type: 'USER', user: user });
        // },
        logIn: async (user) => {
            if (!auth_functions_1.isEmpty(user)) {
                try {
                    await setUser;
                    setUser(user);
                    document.cookie = cookie_1.default.serialize('authToken', user.jwtAuthToken, {
                        maxAge: 30 * 24 * 60 * 60,
                    });
                    document.cookie = cookie_1.default.serialize('refreshToken', user.jwtRefreshToken, {
                        maxAge: 30 * 24 * 60 * 60,
                    });
                    document.cookie = cookie_1.default.serialize('userID', user.id, {
                        maxAge: 30 * 24 * 60 * 60,
                    });
                    document.cookie = cookie_1.default.serialize('username', user.username, {
                        maxAge: 30 * 24 * 60 * 60,
                    });
                    await localStorage.setItem('authToken', user.jwtAuthToken);
                    await localStorage.setItem('refreshToken', user.jwtRefreshToken);
                    await localStorage.setItem('userID', user.id);
                }
                catch (e) {
                    console.log(e);
                }
            }
            dispatch({ type: 'LOGIN', userID: user.id, token: user.jwtAuthToken });
        },
        logOut: async () => {
            try {
                await localStorage.removeItem('authToken');
                await localStorage.removeItem('refreshToken');
                await localStorage.removeItem('userID');
            }
            catch (e) {
                console.log(e);
            }
            dispatch({ type: 'LOGOUT' });
        },
        signUp: async (user) => {
            if (!auth_functions_1.isEmpty(user)) {
                try {
                    setUser(user);
                    await localStorage.setItem('authToken', user.jwtAuthToken);
                    await localStorage.setItem('refreshToken', user.jwtRefreshToken);
                    await localStorage.setItem('userID', user.id);
                }
                catch (e) {
                    console.log(e);
                }
            }
            // console.log('user token: ', authToken);
            dispatch({ type: 'LOGIN', id: user.id, token: user.jwtAuthToken });
        },
    }), []);
    if (!auth_functions_1.isEmpty(props.user)) {
    }
    else {
        react_1.useEffect(() => {
            setTimeout(async () => {
                let authToken = null;
                let userID = null;
                let RToken = null;
                try {
                    authToken = utilty_1.isServer
                        ? parseCookies_1.default().authToken
                        : await localStorage.getItem('authToken');
                    RToken = await localStorage.getItem('refreshToken');
                    userID = utilty_1.isServer ? parseCookies_1.default().userID : await localStorage.getItem('userID');
                }
                catch (e) {
                    console.log(e);
                }
                console.log(authToken);
                dispatch({ type: 'RETRIEVE_TOKEN', userID: userID, RefreshToken: RToken, token: authToken });
            }, 1000);
        }, []);
    }
    if (loginState.isLoading) {
        return (<div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <spinner_1.default />
            </div>);
    }
    const Component = props.Component;
    const pageProps = props.pageProps;
    return (<context_1.AuthContext.Provider value={authContext}>
            <bahraProviders_1.default {...props.children}>
                <index_1.GlobalStyle />
                {loginState.token && loginState.userID !== null ?
        <Component {...pageProps} user={props.user}/>
        :
            <Component {...pageProps}/>}
            </bahraProviders_1.default>

        </context_1.AuthContext.Provider>);
};
exports.default = AuthProvider;
//# sourceMappingURL=authProvider.jsx.map