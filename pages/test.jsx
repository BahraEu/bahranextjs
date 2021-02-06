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
const react_1 = __importStar(require("react"));
// import { NextSeo } from 'next-seo';
const i18n_1 = require("../i18n");
const with_apollo_1 = __importDefault(require("../src/services/apollo/with-apollo"));
const blankLayout_1 = __importDefault(require("../src/components/Layouts/blankLayout/blankLayout"));
// import { IStore } from '../src/services/stores/store';
// import { inject, observer } from 'mobx-react';
const utilty_1 = require("../src/utilty");
// import Maps from '@components/bahra/MuComponents/Maps/Maps'
const Notifications_1 = __importDefault(require("@components/bahra/MuComponents/Notifications/Notifications"));
const TableList_1 = __importDefault(require("@components/bahra/MuComponents/TableList/TableList"));
const UpgradeToPro_1 = __importDefault(require("@components/bahra/MuComponents/UpgradeToPro/UpgradeToPro"));
const RTLPage_1 = __importDefault(require("@components/bahra/MuComponents/RTLPage/RTLPage"));
const ProductSection_1 = __importDefault(require("@components/bahra/MuComponents/Sections/ProductSection"));
const WorkSection_1 = __importDefault(require("@components/bahra/MuComponents/Sections/WorkSection"));
const icons_1 = require("@material-ui/icons");
class Testpage extends react_1.Component {
    static async getInitialProps(pageProps) {
        console.log('pagepppppppppppppppppppppppppppppppppppppppppppppppppProps', pageProps);
        const currentUrl = utilty_1.isServer ? pageProps.req.path : '/home';
        const currentLanguage = utilty_1.isServer ? pageProps.req.language
            : i18n_1.i18n.language;
        return {
            namespacesRequired: 'common',
            t: undefined,
            currentLanguage,
            currentUrl,
        };
    }
    render() {
        const props = this.props;
        return (<>
                <blankLayout_1.default {...props.children} currentUrl={props.currentUrl} currentLanguage={props.currentLanguage}> 
               <Notifications_1.default />
                <RTLPage_1.default />
                <icons_1.Dashboard />
                <UpgradeToPro_1.default /> 
                
                 <TableList_1.default />
                <ProductSection_1.default />
                <WorkSection_1.default />            
                </blankLayout_1.default>
            </>);
    }
}
exports.default = with_apollo_1.default(i18n_1.withTranslation('common')(Testpage));
//# sourceMappingURL=test.jsx.map