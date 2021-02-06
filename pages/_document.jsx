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
const document_1 = __importStar(require("next/document"));
const react_1 = __importDefault(require("react"));
const MetaData_1 = __importDefault(require("../src/components/Common/MetaData/MetaData"));
const styled_components_1 = require("styled-components");
const helpers_1 = require("../src/utilty/helpers");
const parseCookies_1 = __importDefault(require("../src/utilty/parseCookies"));
const styles_1 = require("@material-ui/core/styles");
class MyDocument extends document_1.default {
    static async getInitialProps(ctx) {
        const isProduction = process.env.NODE_ENV === 'production';
        // const mode = isServer ? parseCookies(ctx.req).mode : localStorage.getItem('mode')
        const local = helpers_1.isServer ? parseCookies_1.default(ctx.req).language : localStorage.getItem('language');
        const sheet = new styled_components_1.ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        const materialUiSheets = new styles_1.ServerStyleSheets();
        const direction = local === 'Arabic' ? 'rtl' : 'ltr';
        try {
            ctx.renderPage = () => originalRenderPage({
                enhanceApp: App => props => sheet.collectStyles(materialUiSheets.collect(<App {...props}/>)),
            });
            const initialProps = await document_1.default.getInitialProps(ctx);
            return Object.assign(Object.assign({}, initialProps), { isProduction,
                local,
                direction, styles: [
                    <react_1.default.Fragment key="styles">
                        {initialProps.styles}
                        {materialUiSheets.getStyleElement()}
                        {sheet.getStyleElement()}
                    </react_1.default.Fragment>,
                ] });
        }
        finally {
            sheet.seal();
        }
    }
    render() {
        const { local, direction } = this.props;
        // concole.log('mode', mode)
        return (<document_1.Html lang={local} dir={direction}>
                <document_1.Head>
                    <MetaData_1.default />
                </document_1.Head>
                <body>
                    <document_1.Main />
                    <document_1.NextScript />
                </body>
            </document_1.Html>);
    }
}
exports.default = MyDocument;
//# sourceMappingURL=_document.jsx.map