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
exports.Container = exports.FooterWrapper = void 0;
const core_1 = require("@material-ui/core");
const theme_1 = __importStar(require("../../styles/theme"));
const utilty_1 = require("../../utilty");
exports.FooterWrapper = theme_1.default.footer `
background: ${props => utilty_1.hexa(props.theme.bg.primary, 0.9)};
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    color: ${props => utilty_1.hexa(props.theme.bg.inset3, 1)} ;
    overflow: hidden;
    text-align: center;
`;
exports.Container = theme_1.default(core_1.Grid) `
    background: ${props => utilty_1.hexa(props.theme.bg.inset, 0.6)}!important;
    display: flex  !important;
    text-align: center  !important;
    justify-content: center  !important;
    align-items: center  !important;
    flex-direction: column !important  !important;
    border-radius: 8px  !important;
    position: fixed  !important;
    left: 0  !important;
    bottom: 0  !important;
    transition: ${theme_1.theme.animations.default}  !important;
    overflow: hidden  !important;
    `;
//# sourceMappingURL=style.jsx.map