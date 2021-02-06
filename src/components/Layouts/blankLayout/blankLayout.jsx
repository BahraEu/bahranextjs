"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const NavContainer_1 = __importDefault(require("../../Header/NavContainer"));
const BlankFooter_1 = __importDefault(require("../../Footer/BlankFooter"));
const head_1 = __importDefault(require("next/head"));
const mobileNav_1 = __importDefault(require("../../Header/mobileNav/mobileNav"));
const drawer_1 = __importDefault(require("../../Drawer/drawer"));
const core_1 = require("@material-ui/core");
const BlankLayout = props => {
    // let activeRoute = BahaRouter(props.currentUrl);
    return (<>
            <head_1.default>
                <title>BAHRA</title>
                <meta name="referrer" content="origin"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </head_1.default>

            <mobileNav_1.default currentUrl={props.currentUrl} currentLanguage={props.currentLanguage} user={props.user}/>
            <NavContainer_1.default isNavVisible={props.isNavVisible} currentUrl={props.currentUrl} currentLanguage={props.currentLanguage} user={props.user}/>
            <drawer_1.default currentUrl={props.currentUrl} currentLanguage={props.currentLanguage}/>
            
            <div>
                <core_1.Grid>
                    {props.children}  
                </core_1.Grid>
            </div>
          

            {props.isFooterVisible && <BlankFooter_1.default fromFullYear={2020} {...props.children}/>}
        </>);
};
BlankLayout.defaultProps = {
    isFooterVisible: true,
    isNavVisible: true,
    isUserVisible: true,
    expanded: false,
};
exports.default = BlankLayout;
//# sourceMappingURL=blankLayout.jsx.map