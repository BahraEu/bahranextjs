"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleLayoutPaper = exports.SingleLayoutContent = exports.InnerGrid = exports.PageInfo = exports.SingleLayoutContainer = void 0;
const theme_1 = __importDefault(require("../../../styles/theme"));
const index_1 = require("../../../styles/theme/index");
const utilty_1 = require("../../../utilty");
const core_1 = require("@material-ui/core");
exports.SingleLayoutContainer = theme_1.default.div `
width: 100%;
height:100%;
background: ${props => utilty_1.tint(props.theme.bg.inset3, 0.1)};
            a {
                border-radius: 4px;
                width: 100%;
                text-align: center;
                margin: 0 2px;
            }
            `;
exports.PageInfo = theme_1.default(core_1.Grid) `
display:flex,
color: ${props => props.theme.bg.primary};
justify-content: space-between;
`;
exports.InnerGrid = theme_1.default(core_1.Grid) `
display: flex;
justify-content: space-between;
flex-direction: row !important;
text-align: center;
border-radius: 1em !important;
margin:0 12%;
background-color: ${props => utilty_1.hexa(props.theme.bg.inset, 0.6)}!important;

@media (max-width: ${index_1.theme.breakpoints[0]}) {
    margin:0 12%;
 
}  
@media (max-width: ${index_1.theme.breakpoints[1]}) {
    margin:0 6%;
 
}  
@media (max-width: ${index_1.theme.breakpoints[3]}) {
    margin:0 2%;


}
  
@media (max-width: ${index_1.theme.breakpoints[5]}) {
    margin:0 0%;
 
} 
`;
exports.SingleLayoutContent = theme_1.default(core_1.Grid) `
display: flex;
justify-content: space-between;
flex-direction: row !important;
text-align: center  !important;
width: 10% !important;
height:100% !important;
border-radius: 1em !important;
margin:1% 1%;


`;
exports.SingleLayoutPaper = theme_1.default(core_1.Paper) `
display: flex !important;
justify-content: center !important;
flex-direction: row !important;
text-align: center  !important;
align-self: center;
width: 10% !important;
height:10% !important;
background-color: ${props => utilty_1.hexa(props.theme.bg.inset3, 0.2)}!important;

margin:1% 1%;
@media (max-width: ${index_1.theme.breakpoints[4]}) {

        a {
            text-align: center;
        }
    }
@media (max-width: ${index_1.theme.breakpoints[2]}) {

    a {
        text-align: center;
    }
}


`;
//# sourceMappingURL=style.jsx.map