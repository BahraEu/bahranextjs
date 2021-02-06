"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uploadFile_1 = __importDefault(require("../src/components/bahra/Account/uploadFile"));
const blankLayout_1 = __importDefault(require("../src/components/Layouts/blankLayout/blankLayout"));
const i18n_1 = require("../i18n");
const Typography_1 = require("../src/styles/Typography");
const utilty_1 = require("../src/utilty");
const react_1 = __importDefault(require("react"));
const parseCookies_1 = __importDefault(require("../src/utilty/parseCookies"));
const config_1 = __importDefault(require("config/config"));
// import { WP_USER } from '../src/graphql/queries/wp-user';
// import { useQuery } from 'react-apollo';
const withData_1 = __importDefault(require("../src/services/apollo/withData"));
// import Spinner from '../src/styles/spinner/spinner';
const accountForm_1 = __importDefault(require("../src/components/bahra/Form/accountForm"));
const profile_1 = __importDefault(require("./profile"));
const Acoount = ({ currentLanguage, t, userID, currentUrl }) => {
    // const { loading, error, data } = useQuery(WP_USER, {
    //     notifyOnNetworkStatusChange: true,
    //     variables: { id:userID },
    // });
    // if (loading) return <Spinner />;
    // if (error) return `Error! ${error.message}`;
    // if (data) {
    // let user = data.user;
    return (<>
        <blankLayout_1.default currentUrl={currentUrl} currentLanguage={currentLanguage}>
            <Typography_1.H1 className="mb-2">{t('profile')}</Typography_1.H1>
             <Typography_1.H1 className="mb-2">{userID}</Typography_1.H1>
            <accountForm_1.default user={userID}/>
            <uploadFile_1.default />
            <profile_1.default />
        </blankLayout_1.default>
        </>);
};
Acoount.getInitialProps = async (context) => {
    const currentUrl = utilty_1.isServer ? await context.req.path : '/account';
    const currentLanguage = utilty_1.isServer ? await context.req.language : i18n_1.i18n.language;
    const userID = utilty_1.isServer
        ? parseCookies_1.default(context.req).userID
        : localStorage.getItem(config_1.default.userID);
    return {
        namespacesRequired: ['common'],
        namespaces: 'common',
        t: undefined,
        currentLanguage,
        currentUrl,
        userID
    };
};
exports.default = withData_1.default(i18n_1.withTranslation('common')(Acoount));
//# sourceMappingURL=account.jsx.map