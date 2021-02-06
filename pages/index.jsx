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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
const CarouselHooks_1 = __importDefault(require("../src/components/bahra/HomePage/Carousel/CarouselHooks"));
const Subscription_1 = __importDefault(require("../src/components/bahra/HomePage/Subscription/Subscription"));
const i18n_1 = require("../i18n");
const with_apollo_1 = __importDefault(require("../src/services/apollo/with-apollo"));
const blankLayout_1 = __importDefault(require("../src/components/Layouts/blankLayout/blankLayout"));
const mobx_react_1 = require("mobx-react");
const utilty_1 = require("../src/utilty");
let HomePage = class HomePage extends react_1.Component {
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
                    
                    

                    <CarouselHooks_1.default />

                    <Subscription_1.default />
                </blankLayout_1.default>
            </>);
    }
};
HomePage = __decorate([
    mobx_react_1.inject('store'),
    mobx_react_1.observer
], HomePage);
exports.default = with_apollo_1.default(i18n_1.withTranslation('common')(HomePage));
//# sourceMappingURL=index.jsx.map