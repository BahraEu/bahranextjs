"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/styles/Typography/index");
const blankLayout_1 = __importDefault(require("../src/components/Layouts/blankLayout/blankLayout"));
const router_1 = require("next/router");
const utilty_1 = require("../src/utilty");
// pages/404.js
function Custom404(pageProps) {
    const Router = router_1.useRouter();
    const currentUrl = utilty_1.isServer ? pageProps.req.path : Router.route;
    const currentLanguage = utilty_1.isServer ? pageProps.req.language : pageProps.Language;
    console.log('404', currentUrl, currentLanguage);
    return (<>
                       <blankLayout_1.default currentLanguage={currentLanguage} currentUrl={currentUrl}>
                         <index_1.H1>404 - Page Not Found</index_1.H1>
                         </blankLayout_1.default>
    
           </>);
}
exports.default = Custom404;
// import PropTypes from 'prop-types';
// import BlankLayout from '../src/components/Layouts/blankLayout/blankLayout';
//  import {H1} from '../src/styles/Typography/index'
//  import { withTranslation, i18n } from '../src/services/i18n/i18n';
// // pages/404.js
//  const Custom404=({ currentLanguage, currentUrl, Children })=> {
//     return (
//       <>
//                   <BlankLayout currentLanguage={currentLanguage} currentUrl={currentUrl}>
//                     <H1>404 - Page Not Found</H1>
//                     </BlankLayout>
//       </>
//     )
//   }
//   Custom404.getInitialProps = async pageProps => {
//   const currentUrl = isServer ? pageProps.req.path : '/404';
//   const currentLanguage = isServer ? pageProps.req.language : pageProps.Language;
//   return {
//       namespacesRequired: ['common'],
//       namespaces: 'common',
//       t: undefined,
//       currentLanguage,
//       currentUrl,
//   };
// };
// Custom404.propTypes = {
//   t: PropTypes.func.isRequired,
//   currentLanguage: PropTypes.string.isRequired,
// };
// export default withTranslation('common')(Custom404)
//# sourceMappingURL=404.jsx.map