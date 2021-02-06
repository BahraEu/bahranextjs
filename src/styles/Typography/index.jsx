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
exports.pre = exports.P = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = void 0;
const theme_1 = require("../../styles/theme/theme");
const _utilty_1 = require("@utilty");
const theme_2 = __importStar(require("../theme"));
const core_1 = require("@material-ui/core");
exports.H1 = theme_2.default(core_1.Typography) `
font-weight: ${theme_1.theme.fontSizes[0]};

`;
exports.H2 = theme_2.default(core_1.Typography) `
font-weight: ${theme_1.theme.fontSizes[1]};

`;
exports.H3 = theme_2.default(core_1.Typography) `
font-weight: ${theme_1.theme.fontSizes[2]};

`;
exports.H4 = theme_2.default(core_1.Typography) `
font-weight: ${theme_1.theme.fontSizes[3]};

`;
exports.H5 = theme_2.default(core_1.Typography) `
font-weight: ${theme_1.theme.fontSizes[4]};

`;
exports.H6 = theme_2.default(core_1.Typography) `
font-weight: ${theme_1.theme.fontSizes[5]};

   
`;
exports.P = theme_2.default(core_1.Typography) `
    font-size: ${theme_1.theme.fontSizes[6]};
    font-weight: ${theme_1.theme.fontWeights.body};
    line-height: ${theme_1.theme.lineHeights.body};
    letter-spacing: -0.1px;
    color: ${props => props.theme.text.secondary};

    a {
        color: ${props => props.theme.text.link};
        text-decoration: none;
        font-weight: 500;
        word-break: break-word;
        hyphens: auto;
    }

    a:hover {
        text-decoration: none;
        color: ${props => _utilty_1.tint(props.theme.text.link, -30)};
    }

    code {
        margin-top: 0;
        font-size: ${theme_1.theme.fontSizes[0]};
        box-shadow: inset 0 0 0 1px ${props => props.theme.border.default};
    }

    & + & {
        margin-top: ${theme_1.theme.space[4]};
    }

    code {
        margin-top: 0;
        font-size: ${theme_1.theme.fontSizes[0]};
    }

    a > code {
        padding: ${theme_1.theme.space[0]} ${theme_1.theme.space[1]};
        box-shadow: inset 0 0 0 1px ${props => _utilty_1.hexa(props.theme.text.link, 0.16)};
        border-radius: 4px;
        display: inline-block;
        background: ${props => _utilty_1.hexa(props.theme.text.link, 0.12)};
        color: ${props => props.theme.text.link};
    }

    a:hover > code {
        background: ${props => _utilty_1.hexa(props.theme.text.link, 0.16)};
    }
`;
exports.pre = theme_2.css `
    font-size: ${theme_1.theme.fontSizes[0]};
    padding: ${theme_1.theme.space[3]};
    background: ${props => props.theme.bg.inset};
    text-shadow: none;
    border-radius: 8px;
    margin: ${theme_1.theme.space[5]} 0;
    overflow-x: scroll;
    box-shadow: 0 0 0 1px ${props => props.theme.border.default},
        inset 0 1px 4px rgba(0, 0, 0, 0.04);

    &::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: ${theme_1.theme.breakpoints[4]}) {
        font-size: ${theme_1.theme.fontSizes[0]};
    }
`;
//# sourceMappingURL=index.jsx.map