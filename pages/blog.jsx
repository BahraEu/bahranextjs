"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(require("prop-types"));
const i18n_1 = require("../i18n");
const withData_1 = __importDefault(require("../src/services/apollo/withData"));
const singleLayout_1 = __importDefault(require("../src/components/Layouts/singleLayout/singleLayout"));
const react_1 = __importDefault(require("react"));
const wp_query_blog_1 = require("../src/graphql/queries/wp-query-blog");
const singleBlog_1 = __importDefault(require("../src/components/bahra/Blogs/singleBlog"));
function Blog({ BlogItem, childeren, currentLanguage, currentUrl }) {
    return (<>
            <singleLayout_1.default {...childeren} currentUrl={currentUrl} currentLanguage={currentLanguage}>
                <singleBlog_1.default blog={BlogItem} {...childeren}/>
                
            </singleLayout_1.default>
        </>);
}
Blog.getInitialProps = async function (context) {
    const currentUrl = context.req.path || context.req.originalUrl;
    const currentLanguage = context.req.language || i18n_1.i18n.language;
    let { query: { slug }, } = context;
    const id = slug ? parseInt(slug.split('-').pop()) : context.query.id;
    const res = await context.apolloClient.query({
        query: wp_query_blog_1.GET_POST_BIJ_ID,
        variables: { postId: id },
    });
    return {
        namespacesRequired: ['common'],
        namespaces: 'common',
        BlogItem: res.data.postBy,
        currentUrl,
        currentLanguage,
    };
};
Blog.propTypes = {
    t: prop_types_1.default.func.isRequired,
};
exports.default = withData_1.default(i18n_1.withTranslation('common')(Blog));
//# sourceMappingURL=blog.jsx.map