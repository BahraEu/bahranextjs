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
const React = __importStar(require("react"));
const i18n_1 = require("../i18n");
const wp_query_1 = require("../src/graphql/queries/wp-query");
const prop_types_1 = __importDefault(require("prop-types"));
const Typography_1 = require("../src/styles/Typography");
const blankLayout_1 = __importDefault(require("../src/components/Layouts/blankLayout/blankLayout"));
const utilty_1 = require("../src/utilty");
const withData_1 = __importDefault(require("../src/services/apollo/withData"));
const About = ({ data, t, currentLanguage, currentUrl }) => {
    debugger;
    console.log('about ', t, data);
    return (<>
            <blankLayout_1.default currentLanguage={currentLanguage} currentUrl={currentUrl}>

               <Typography_1.H1>{data.page.title}</Typography_1.H1>
                <p dangerouslySetInnerHTML={{ __html: data.page.content }}></p> 
            </blankLayout_1.default>
        </>);
};
About.getInitialProps = async (context) => {
    const currentUrl = utilty_1.isServer ? context.req.path : '/about';
    const currentLanguage = utilty_1.isServer ? context.req.language : i18n_1.i18n.language;
    const id = 'cG9zdDozNg==';
    const res = await context.apolloClient.query({
        query: wp_query_1.GET_ABOUT_PAGE,
        variables: { id },
    });
    return {
        namespacesRequired: ['common'],
        namespaces: 'common',
        t: undefined,
        data: res.data,
        currentLanguage,
        currentUrl,
    };
};
About.propTypes = {
    t: prop_types_1.default.func.isRequired,
    currentLanguage: prop_types_1.default.string.isRequired,
};
exports.default = withData_1.default(i18n_1.withTranslation('common')(About));
//# sourceMappingURL=about.jsx.map