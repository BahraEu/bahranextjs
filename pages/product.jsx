"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(require("prop-types"));
const i18n_1 = require("../i18n");
const withData_1 = __importDefault(require("../src/services/apollo/withData"));
const singleProduct_1 = __importDefault(require("../src/components/bahra/Products/singleProduct"));
const wp_query_product_1 = require("../src/graphql/queries/wp-query-product");
const mainLayout_1 = __importDefault(require("../src/components/Layouts/main-Layout/mainLayout"));
const helpers_1 = require("../src/utilty/helpers");
const Product = ({ productItem, currentUrl, currentLanguage }) => {
    debugger;
    return (<>
            <mainLayout_1.default currentUrl={currentUrl} currentLanguage={currentLanguage}>
                <singleProduct_1.default product={productItem}/>
            </mainLayout_1.default>
        </>);
};
Product.getInitialProps = async function (context) {
    const currentUrl = helpers_1.isServer ? await context.req.path : '/product';
    const currentLanguage = helpers_1.isServer ? await context.req.language : i18n_1.i18n.language;
    let { query: { slug }, } = context;
    const id = slug ? JSON.parse(slug.split('-').pop()) : context.query.id;
    console.log('iddddddddddddddddddd', id, context);
    const res = await context.apolloClient.query({
        query: wp_query_product_1.GET_PRODUCT_BIJ_ID,
        variables: { id },
    });
    return {
        productItem: res.data.product,
        namespacesRequired: 'common',
        t: undefined,
        currentLanguage,
        currentUrl,
    };
};
Product.propTypes = {
    t: prop_types_1.default.func.isRequired,
};
exports.default = withData_1.default(i18n_1.withTranslation('common')(Product));
//# sourceMappingURL=product.jsx.map