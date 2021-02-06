"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledTopToolBarIcons = exports.StyledToolBar = void 0;
const core_1 = require("@material-ui/core");
const theme_1 = __importDefault(require("../../../../styles/theme"));
const utilty_1 = require("../../../../utilty");
const theme_2 = require("../../../../styles/theme");
const style_1 = require("../../../bahra/BahraIcons/style");
exports.StyledToolBar = theme_1.default(core_1.Paper) `
height:80% !important;
width:12% !important;
top:24% !important;
bottom: 16% !important;
overflow-y: scroll !important;
position: fixed !important;
overflow: hidden !important;
right:12% !important;
align-self:center !important;
 display: flex !important;
 justify-content: space-between;
 flex-direction:column !important;
 justify-content: center !important;
 border-radius: 1em !important;

 background: ${props => utilty_1.hexa(props.theme.bg.inset3, 0.3)}!important;
 align-items: center !important;
 @media (max-width: ${theme_2.theme.breakpoints[0]}) {
    right:6% !important;
    top: 26% !important;
}

 @media (max-width: ${theme_2.theme.breakpoints[1]}) {
    right:6% !important;
    top: 24% !important;
}  
@media (max-width: ${theme_2.theme.breakpoints[3]}) {
    top: 28% !important;
    right:4% !important;
    padding-top:9% !important;
    a {
        text-align: center;
    }
}  
@media (max-width: ${theme_2.theme.breakpoints[5]}) {
    top: 34% !important;
    right:2% !important;
    padding-top:16% !important;

}
@media (max-width: ${theme_2.theme.breakpoints[6]}) {
    width:12% !important;
    right:2% !important;
    top:40% !important;
    padding-top:20% !important;

}   
`;
exports.StyledTopToolBarIcons = theme_1.default(core_1.IconButton) `
color:${props => utilty_1.hexa(props.theme.bg.inset3, 1.6)};
width: 5em !important;
height: 5em !important;
margin:1em 0!important;
&:hover ${style_1.StyledSvgIcon}{
    display: flex  !important;
    color: ${props => utilty_1.hexa(props.theme.bg.secondary, 1)} !important;
    margin:2em 0  !important;
    width: 4em !important;
    height: 4em !important;
}`;
//# sourceMappingURL=ToolBarStyles.jsx.map