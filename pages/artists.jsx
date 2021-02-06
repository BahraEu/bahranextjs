"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const i18n_1 = require("../i18n");
const prop_types_1 = __importDefault(require("prop-types"));
const react_apollo_1 = require("react-apollo");
const withData_1 = __importDefault(require("../src/services/apollo/withData"));
const wp_query_artist_1 = require("../src/graphql/queries/wp-query-artist");
const mainLayout_1 = __importDefault(require("../src/components/Layouts/main-Layout/mainLayout"));
const artistList_1 = __importDefault(require("../src/components/bahra/Artists/artistList"));
const spinner_1 = __importDefault(require("../src/styles/spinner/spinner"));
const utilty_1 = require("../src/utilty");
const ArtistsPage = ({ currentLanguage, currentUrl, Children }) => {
    const { loading, error, data } = react_apollo_1.useQuery(wp_query_artist_1.GetFirstLevelArtist, {
        notifyOnNetworkStatusChange: true,
    });
    if (loading)
        return <spinner_1.default />;
    if (error)
        return `Error! ${error.message}`;
    if (data) {
        let artistsItems = data.artists.items;
        return (<>
                <mainLayout_1.default {...Children} currentUrl={currentUrl} currentLanguage={currentLanguage} artists={artistsItems}>
                    
                    <artistList_1.default artists={artistsItems} currentUrl={currentUrl} currentLanguage={currentLanguage}/>
                </mainLayout_1.default>
            </>);
    }
};
ArtistsPage.getInitialProps = async (pageProps) => {
    const currentUrl = utilty_1.isServer ? pageProps.req.path : '/artists';
    const currentLanguage = utilty_1.isServer ? pageProps.req.language : pageProps.Language;
    return {
        namespacesRequired: ['common'],
        namespaces: 'common',
        t: undefined,
        currentLanguage,
        currentUrl,
    };
};
ArtistsPage.propTypes = {
    t: prop_types_1.default.func.isRequired,
    currentLanguage: prop_types_1.default.string.isRequired,
};
exports.default = withData_1.default(i18n_1.withTranslation('common')(ArtistsPage));
//# sourceMappingURL=artists.jsx.map