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
exports.CarouselFooter = exports.Title = exports.MiddelColumn = exports.CarouselBahra = exports.StyledContainer = void 0;
const theme_1 = __importStar(require("../../../../styles/theme"));
const core_1 = require("@material-ui/core");
const _utilty_1 = require("@utilty");
const Typography_1 = require("../../../../styles/Typography");
exports.StyledContainer = theme_1.default.div `
    background: ${props => _utilty_1.hexa(props.theme.bg.inset3, 2)};
    z-index: -1;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04);
    position: relative;
    height: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in-out;
    backdrop-filter: saturate(180%) blur(20px);
    font-size: ${theme_1.theme.fontSizes[0]};
    font-weight: 600;
    margin: auto;
    @media (min-width: ${theme_1.theme.breakpoints[4]}) {
        display: flex;
    }
    @media (max-width: ${theme_1.theme.breakpoints[4]}) {
        display: flex;
    }
    `;
exports.CarouselBahra = theme_1.default(core_1.Container) `
    position: relative;
    height:100% ;
    display: flex;
    align-items: center;
    justify-content: center; 
    background-image: url(https://www.bahra.eu/admin/wp-content/uploads/2021/01/fountain-1.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

`;
exports.MiddelColumn = theme_1.default(core_1.Grid) `
height: 100% !important;
text-align: center !important;
align-self: center !important;
margin: auto !important;
width: 60% !important;
display: flex !important;
justify-content: center!important;
flex-direction:column !important;
align-items: center !important;

`;
exports.Title = theme_1.default(Typography_1.H1) `
    display: flex-inline !important;
    color: ${props => props.theme.text.primary};
    align-self: center !important;
    max-height:6em;
    max-width:6em;
    align-items: center;
    justify-content: center !important;
    font-family:${theme_1.theme.fonts.Raleway[0]};
    @media (max-width: ${theme_1.theme.breakpoints[4]}) {
      
    }
    
`;
exports.CarouselFooter = theme_1.default(core_1.Container) `
    height: 40% !important;
    width: 60% !important;
    align-items: center;
    display: flex !important;
    justify-content: space-around !important;
    flex-direction:column !important;
    justify-content: center !important;
    justify-content: center !important;

`;
//# sourceMappingURL=style.jsx.map