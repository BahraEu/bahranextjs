"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const i18n_1 = require("../i18n");
const prop_types_1 = __importDefault(require("prop-types"));
const react_apollo_1 = require("react-apollo");
const withData_1 = __importDefault(require("../src/services/apollo/withData"));
const wp_query_product_1 = require("../src/graphql/queries/wp-query-product");
const mainLayout_1 = __importDefault(require("../src/components/Layouts/main-Layout/mainLayout"));
const productsList_1 = __importDefault(require("../src/components/bahra/Products/productsList"));
const spinner_1 = __importDefault(require("../src/styles/spinner/spinner"));
const helpers_1 = require("../src/utilty/helpers");
const ProductsPage = ({ currentLanguage, currentUrl, Children, user, store }) => {
    const { loading, error, data } = react_apollo_1.useQuery(wp_query_product_1.GetFirstLevelproducts, {
        notifyOnNetworkStatusChange: true,
    });
    if (loading)
        return <spinner_1.default />;
    if (error)
        return `Error! ${error.message}`;
    if (data) {
        let productsItems = data.products.items;
        debugger;
        console.log('getServerSideProps', store);
        return (<>
                <mainLayout_1.default currentUrl={currentUrl} currentLanguage={currentLanguage} products={productsItems} user={user} {...Children}>

                    <productsList_1.default products={productsItems} currentUrl={currentUrl} currentLanguage={currentLanguage} user={user}/>
                </mainLayout_1.default>
            </>);
    }
};
ProductsPage.getInitialProps = async (pageProps) => {
    const store = pageProps.RootState;
    const currentUrl = helpers_1.isServer ? pageProps.req.path : '/products';
    const currentLanguage = helpers_1.isServer ? pageProps.req.language : i18n_1.i18n.language;
    return {
        namespacesRequired: ['common'],
        namespaces: 'common',
        t: undefined,
        currentLanguage,
        currentUrl,
        store
    };
};
ProductsPage.propTypes = {
    t: prop_types_1.default.func.isRequired,
    language: prop_types_1.default.string.isRequired,
};
exports.default = withData_1.default(i18n_1.withTranslation('common')(ProductsPage));
//# sourceMappingURL=products.jsx.map