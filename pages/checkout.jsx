"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const i18n_1 = require("../i18n");
const utilty_1 = require("../src/utilty");
const prop_types_1 = __importDefault(require("prop-types"));
const Typography_1 = require("../src/styles/Typography");
const blankLayout_1 = __importDefault(require("../src/components/Layouts/blankLayout/blankLayout"));
const Checkout = ({ currentUrl, currentLanguage }) => {
    return (<blankLayout_1.default currentUrl={currentUrl} currentLanguage={currentLanguage}>
            <div>
                <Typography_1.H1>Checkout Page.</Typography_1.H1>
            </div>
        </blankLayout_1.default>);
};
Checkout.getInitialProps = async (pageProps) => {
    const currentUrl = utilty_1.isServer ? pageProps.req.path : '/checkout';
    const currentLanguage = utilty_1.isServer ? pageProps.req.language : i18n_1.i18n.language;
    return {
        namespacesRequired: ['common'],
        namespaces: 'common',
        t: undefined,
        currentLanguage,
        currentUrl,
    };
};
Checkout.propTypes = {
    t: prop_types_1.default.func.isRequired,
    currentLanguage: prop_types_1.default.string.isRequired,
};
exports.default = i18n_1.withTranslation('common')(Checkout);
//# sourceMappingURL=checkout.jsx.map