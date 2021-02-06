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
exports.StyledMenuItem = exports.LogoContainer = exports.CloseButton = exports.MobileContainer = void 0;
const index_1 = __importStar(require("@styles/theme/index"));
const utilty_1 = require("../../../utilty");
const theme_1 = require("../../../styles/theme");
const core_1 = require("@material-ui/core");
const base = index_1.css `
    padding: 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: ${props => utilty_1.hexa(props.theme.bg.primary, 0.9)};
    z-index: 4;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04);
    transition: all 0.2s ease-in-out;
    backdrop-filter: saturate(180%) blur(20px);
    font-size: ${theme_1.theme.fontSizes[0]};
    font-weight: 600;
    margin-top: 0;

    a {
        padding: 8px;
        border-radius: 4px;
        width: 100%;
        text-align: center;
        margin: 0 2px;
    }

    @media (max-width: ${theme_1.theme.breakpoints[4]}) {
        font-size: ${theme_1.theme.fontSizes[1]};
    }
`;
exports.MobileContainer = index_1.default.header `
    ${base};
    background-color: ${props => props.theme.bg.primary};
    padding: 0rem 4rem !important;
    display: flex;
    padding:0;
    margin:0;
    justify-content: space-between !important;
    flex-direction: row !important;
    @media (min-width: ${theme_1.theme.breakpoints[4]}) {
        display: none;
    }
    @media (max-width: ${theme_1.theme.breakpoints[6]}) {
        display: inline-flex;
    }
`;
exports.CloseButton = index_1.default.div `
    position: relative;
    padding: 0 8px;
    display: ${props => (props.visible ? 'block' : 'none')};
    font-size: 26px;
    font-weight: 300;
    cursor: pointer;
`;
exports.LogoContainer = index_1.default(core_1.MenuItem) `
    display: flex;
    justify-content: center !important;
    align-self: center !important;
    align-items: center !important;
    padding:0;
    margin:0;
`;
exports.StyledMenuItem = index_1.default(core_1.MenuItem) `
    display: flex;
    justify-content: center;
    align-self: center;
    padding:0;
    align-items: flex-end;
`;
// export const Rapper = styled(Menu)`
//     ${base};
//     justify-content: space-around;
//     position: absolute !important;
//     display: flex;
//     justify-content:!important;
//     flex-direction: column !important;
//     justify-content: flex-start !important;
//     @media (min-width: ${theme.breakpoints[4]}) {
//         display: flex;
//     }
//     @media (max-width: ${theme.breakpoints[4]}) {
//         display: none;
//     }
// `;
//# sourceMappingURL=style.jsx.map