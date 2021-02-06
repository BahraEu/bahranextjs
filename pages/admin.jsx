"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const i18n_1 = require("../i18n");
const withData_1 = __importDefault(require("../src/services/apollo/withData"));
const wp_query_admin_1 = require("../src/graphql/queries/wp-query-admin");
const mainLayout_1 = __importDefault(require("../src/components/Layouts/main-Layout/mainLayout"));
const react_1 = __importDefault(require("react"));
const singleAdmin_1 = __importDefault(require("../src/components/bahra/Team/singleAdmin"));
function Admin({ BlogItem, childeren, currentLanguage, currentUrl }) {
    return (<>
            <mainLayout_1.default {...childeren} currentUrl={currentUrl} currentLanguage={currentLanguage}>
                <singleAdmin_1.default blog={BlogItem} {...childeren}/>
            </mainLayout_1.default>
        </>);
}
Admin.getInitialProps = async function (context) {
    const currentUrl = context.req.path || context.req.originalUrl;
    const currentLanguage = context.req.language || i18n_1.i18n.language;
    let { query: { slug }, } = context;
    const id = slug ? parseInt(slug.split('-').pop()) : context.query.id;
    const res = await context.apolloClient.query({
        query: wp_query_admin_1.GET_ADMIN_BIJ_ID,
        variables: { id },
    });
    return {
        namespacesRequired: ['common'],
        namespaces: 'common',
        BlogItem: res.data.postBy,
        currentUrl,
        currentLanguage,
    };
};
exports.default = withData_1.default(i18n_1.withTranslation('common')(Admin));
//# sourceMappingURL=admin.jsx.map