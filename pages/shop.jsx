"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const i18n_1 = require("../i18n");
const wp_query_product_1 = require("../src/graphql/queries/wp-query-product");
const productsList_1 = __importDefault(require("../src/components/bahra/Products/productsList"));
const mainLayout_1 = __importDefault(require("../src/components/Layouts/main-Layout/mainLayout"));
const react_apollo_1 = require("react-apollo");
const spinner_1 = __importDefault(require("../src/styles/spinner/spinner"));
const helpers_1 = require("../src/utilty/helpers");
const parseCookies_1 = __importDefault(require("../src/utilty/parseCookies"));
const Shop = ({ currentLanguage, currentUrl, Children, user }) => {
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
        console.log('Shop', Shop, user);
        return (<>
                <mainLayout_1.default {...Children} currentUrl={currentUrl} currentLanguage={currentLanguage}>

                    <productsList_1.default products={productsItems} currentUrl={currentUrl} currentLanguage={currentLanguage}/>
                </mainLayout_1.default>
            </>);
    }
};
Shop.getInitialProps = async (pageProps) => {
    const currentUrl = helpers_1.isServer ? await pageProps.req.path : '/shop';
    const userID = helpers_1.isServer ? parseCookies_1.default(pageProps.req).userID : localStorage.getItem('userID');
    const currentLanguage = helpers_1.isServer ? await pageProps.req.language : i18n_1.i18n.language;
    return {
        namespacesRequired: ['common'],
        namespaces: 'common',
        t: undefined,
        currentLanguage,
        currentUrl,
        userID
    };
};
exports.default = (i18n_1.withTranslation('common')(Shop));
//# sourceMappingURL=shop.jsx.map