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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlankPaper = exports.BlankLayoutContent = exports.InnerGrid = exports.BlankLayoutContainer = exports.PageInfo = void 0;
const theme_1 = __importStar(require("../../../styles/theme"));
const core_1 = require("@material-ui/core");
const _utilty_1 = require("@utilty");
exports.PageInfo = theme_1.default(core_1.Grid) `
display:flex,
color: ${props => props.theme.bg.primary};
justify-content: space-between;
padding:2em 0em;
`;
exports.BlankLayoutContainer = theme_1.default.div `
width: 100%;
height:100%;
background: ${props => _utilty_1.tint(props.theme.bg.inset3, 0.1)};
       
            `;
exports.InnerGrid = theme_1.default.div `

`;
exports.BlankLayoutContent = theme_1.default(core_1.Grid) `
display: flex;
justify-content: space-between;
flex-direction: row !important;
text-align: center  !important;
width: 100% !important;
height:100% !important;
border-radius: 1em !important;
margin:1% 1%;
          
`;
exports.BlankPaper = theme_1.default(core_1.Paper) `
    display: flex;
    justify-content: space-between;
    flex-direction: row !important;
    text-align: center  !important;
    width: 100% !important;
    height:100% !important;
    margin:1% 1%;
    @media (max-width: ${theme_1.theme.breakpoints[4]}) {

            a {
                text-align: center;
            }
        }
    @media (max-width: ${theme_1.theme.breakpoints[2]}) {

        a {
            text-align: center;
        }
    }
`;
//# sourceMappingURL=style.jsx.map