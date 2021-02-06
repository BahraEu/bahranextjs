"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const wp_user_1 = require("../src/graphql/queries/wp-user");
const i18n_1 = require("../i18n");
const Typography_1 = require("../src/styles/Typography");
const helpers_1 = require("../src/utilty/helpers");
const parseCookies_1 = __importDefault(require("../src/utilty/parseCookies"));
const config_1 = __importDefault(require("config/config"));
const react_1 = __importDefault(require("react"));
const react_apollo_1 = require("react-apollo");
const spinner_1 = __importDefault(require("../src/styles/spinner/spinner"));
const withData_1 = __importDefault(require("../src/services/apollo/withData"));
const DashboardComponent_1 = __importDefault(require("../src/components/bahra/Account/Dashboard/DashboardComponent"));
const blankLayout_1 = __importDefault(require("../src/components/Layouts/blankLayout/blankLayout"));
const Dashboard = ({ Children, currentUrl, currentLanguage, user, userID, t }) => {
    const { loading, error, data } = react_apollo_1.useQuery(wp_user_1.WP_USER, {
        variables: { id: userID }
    });
    if (loading)
        return <spinner_1.default />;
    if (error)
        return `Error! ${error.message}`;
    if (data) {
        let currentUser = data.user;
        debugger;
        console.log(currentUser, user, t, userID);
        return (<>
                <blankLayout_1.default {...Children} currentUrl={currentUrl} currentLanguage={currentLanguage}>
                                    <Typography_1.H1>"Dashboard"</Typography_1.H1>

                    <DashboardComponent_1.default />
                    <Typography_1.H1>{userID}</Typography_1.H1>
                </blankLayout_1.default>
            </>);
    }
};
Dashboard.getInitialProps = async function (pageProps) {
    console.log('pageProps', pageProps);
    const currentUrl = helpers_1.isServer ? pageProps.req.path : '/Dashboard';
    const currentLanguage = helpers_1.isServer
        ? pageProps.req.language || i18n_1.i18n.language
        : localStorage.getItem(config_1.default.Language);
    const userID = helpers_1.isServer
        ? parseCookies_1.default(pageProps.req).userID
        : localStorage.getItem('userID');
    return {
        namespacesRequired: ['common'],
        namespaces: 'common',
        t: undefined,
        userID,
        currentLanguage,
        currentUrl,
    };
};
exports.default = withData_1.default(i18n_1.withTranslation('common')(Dashboard));
//# sourceMappingURL=dashboard.jsx.map