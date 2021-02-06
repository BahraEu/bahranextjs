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
const withData_1 = __importDefault(require("@services/apollo/withData"));
const react_apollo_1 = require("react-apollo");
const wp_query_blog_1 = require("../src/graphql/queries/wp-query-blog");
const mainLayout_1 = __importDefault(require("../src/components/Layouts/main-Layout/mainLayout"));
const blogList_1 = __importDefault(require("../src/components/bahra/Blogs/blogList"));
const spinner_1 = __importDefault(require("../src/styles/spinner/spinner"));
const helpers_1 = require("../src/utilty/helpers");
const BlogsPage = ({ currentUrl, currentLanguage }) => {
    const { loading, error, data } = react_apollo_1.useQuery(wp_query_blog_1.GetFirstLevelPosts);
    if (loading)
        return <spinner_1.default />;
    if (error)
        return `Error! ${error.message}`;
    if (data) {
        let Posts = data.posts.items;
        return (<>
                <mainLayout_1.default currentUrl={currentUrl} Blogs={Posts} currentLanguage={currentLanguage}>
                    <blogList_1.default Blogs={Posts} currentUrl={currentUrl} currentLanguage={currentLanguage}/>

                </mainLayout_1.default>
            </>);
    }
};
BlogsPage.getInitialProps = async (pageProps) => {
    console.log('pagepppppppppppppppppppppppppppppppppppppppppppppppppProps', pageProps);
    const currentUrl = helpers_1.isServer ? await pageProps.req.path : '/blogs';
    const currentLanguage = helpers_1.isServer ? await pageProps.req.language : i18n_1.i18n.language;
    return {
        namespacesRequired: 'common',
        t: undefined,
        currentLanguage,
        currentUrl,
    };
};
exports.default = withData_1.default(i18n_1.withTranslation('common')(BlogsPage));
//# sourceMappingURL=blogs.jsx.map