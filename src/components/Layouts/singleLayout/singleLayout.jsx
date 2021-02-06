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
const style_1 = require("./style");
const core_1 = require("@material-ui/core");
const Parallax_1 = __importDefault(require("../../../styles/common/mu/Parallax/Parallax"));
const SingleLayout = props => {
    const Imag = "https://www.bahra.eu/admin/wp-content/uploads/2021/01/santa-fe-2367043_1920.jpg";
    return (<>
            <head_1.default>
                <title>BAHRA</title>
                <meta name="referrer" content="origin"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </head_1.default>
            <style_1.SingleLayoutContainer>
            <mobileNav_1.default currentUrl={props.currentUrl} currentLanguage={props.currentLanguage}/>
            <NavContainer_1.default isNavVisible={props.isNavVisible} currentUrl={props.currentUrl} currentLanguage={props.currentLanguage}/>
            <drawer_1.default currentUrl={props.currentUrl} currentLanguage={props.currentLanguage}/>
         <Parallax_1.default small filter image={Imag}/>

        <style_1.InnerGrid>

        <core_1.Grid item xl={2} lg={2} md={3} xs={3} sm={2}>
          <core_1.Paper>Right</core_1.Paper>
        </core_1.Grid>
        <style_1.SingleLayoutContent item xl={8} lg={6} md={6} xs={8} sm={8}>
         <style_1.SingleLayoutPaper>
            {props.children}
          </style_1.SingleLayoutPaper>  
        </style_1.SingleLayoutContent>

        <core_1.Grid item xl={2} lg={2} md={3} xs={3} sm={2}>
          <core_1.Paper>left</core_1.Paper>
        </core_1.Grid>
             
        </style_1.InnerGrid>
          

             <BlankFooter_1.default fromFullYear={2020} {...props.children}/>
             </style_1.SingleLayoutContainer>
        </>);
};
SingleLayout.defaultProps = {
    isFooterVisible: true,
    isNavVisible: true,
    isUserVisible: true,
    expanded: false,
};
exports.default = SingleLayout;
//# sourceMappingURL=singleLayout.jsx.map