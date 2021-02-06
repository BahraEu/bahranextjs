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
exports.Label = exports.MenuContainer = exports.IpadMenu = exports.DesktopMenu = void 0;
const core_1 = require("@material-ui/core");
const theme_1 = __importStar(require("../../../styles/theme"));
const utilty_1 = require("../../../utilty");
exports.DesktopMenu = theme_1.default(core_1.Menu) `
padding: 4px 8px !important;
position: fixed !important;
top: 0 !important;
left: 0 !important;
right: 0 !important;
background: ${props => utilty_1.hexa(props.theme.bg.primary, 0.8)} !important;
`;
exports.IpadMenu = theme_1.default(core_1.Menu) `

`;
exports.MenuContainer = theme_1.default.div `
background-color:${props => utilty_1.hexa(props.theme.bg.inset3, 0.1)}!important;

text-align: center;
  color: black;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;
exports.Label = theme_1.default.span `
    display: flex;
    flex: 1;

    a {
        text-align: center;
    }

    @media (max-width: ${theme_1.theme.breakpoints[4]}) {
        width: 100%;

        a {
            text-align: left;
        }
    }
`;
//# sourceMappingURL=style.jsx.map