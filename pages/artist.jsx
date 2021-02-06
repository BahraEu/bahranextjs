"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const i18n_1 = require("../i18n");
const withData_1 = __importDefault(require("../src/services/apollo/withData"));
const singleArtist_1 = __importDefault(require("../src/components/bahra/Artists/singleArtist"));
const wp_query_artist_1 = require("../src/graphql/queries/wp-query-artist");
const mainLayout_1 = __importDefault(require("../src/components/Layouts/main-Layout/mainLayout"));
function Artist({ artistItem, childeren, currentUrl, currentLanguage }) {
    return (<>
            <mainLayout_1.default {...childeren} currentUrl={currentUrl} currentLanguage={currentLanguage}>
                <singleArtist_1.default artist={artistItem}/>
            </mainLayout_1.default>
        </>);
}
Artist.getInitialProps = async function (context) {
    const currentUrl = context.req.path || context.req.originalUrl;
    const currentLanguage = context.req.language || i18n_1.i18n.language;
    let { query: { slug }, } = context;
    const id = slug ? parseInt(slug.split('-').pop()) : context.query.id;
    const res = await context.apolloClient.query({
        query: wp_query_artist_1.GET_ARTIST_BIJ_ID,
        variables: { id },
    });
    return {
        namespacesRequired: ['common'],
        namespaces: 'common',
        artistItem: res.data.artistBy,
        currentUrl,
        currentLanguage,
    };
};
exports.default = withData_1.default(i18n_1.withTranslation('common')(Artist));
//# sourceMappingURL=artist.jsx.map