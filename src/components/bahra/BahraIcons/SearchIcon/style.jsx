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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledInput = exports.StyledsearchIcon = exports.StyledSearch = exports.StyledFab = exports.StyledSearchIcon = void 0;
const theme_1 = __importStar(require("@styles/theme"));
const Search_1 = __importDefault(require("@material-ui/icons/Search"));
const core_1 = require("@material-ui/core");
exports.StyledSearchIcon = theme_1.default(Search_1.default) `
color: ${props => props.theme.bg.secondary} !important;
ontSize: 20;
 width: 1.2em;
 height: 2em;
 align-self: center;
`;
exports.StyledFab = theme_1.default(core_1.Fab) `
display: flex;
justify-content: center;
align-item: center;
background-color: ${props => props.theme.bg.inset} !important;
margin: ${theme_1.theme.space[4]};
margin-right: ${(props) => props.expanded ? theme_1.theme.space[1] : theme_1.theme.space[3]};

`;
exports.StyledSearch = theme_1.default.div `
position: relative;
borderRadius: 2px;
background-color:${props => props.theme.bg.inset} ;
&:hover: {
  background-color: ${props => props.theme.bg.inset1} ;
},
margin-left: 0;
width: 100%;
[theme.breakpoints.up('sm')]: {
  marginLeft: ${theme_1.theme.space[1]};
  width: auto
}`;
exports.StyledsearchIcon = theme_1.default.div `
    padding: 0;
    height: 100%;
    position: absolute;
    pointerEvents: none;
    display: flex;
    alignItems: center;
    justifyContent: center;
  }
  `;
exports.StyledInput = theme_1.default(core_1.InputBase) `
  // vertical padding + font size from searchIcon
  padding-left: calc: any(1em + ${theme_1.theme.space[2]});
  transition: theme.transitions.create('width');
  width: 100%;
  [theme.breakpoints.up('sm')]: {
    width: 12ch;
    &:focus: {
      width: 20ch;
    }
  }
  `;
//# sourceMappingURL=style.jsx.map