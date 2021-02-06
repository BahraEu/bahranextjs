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
exports.StyledToolBarMenuItem = exports.StyledMenu = exports.StyledToolBarMenu = void 0;
const react_1 = __importDefault(require("react"));
const styles_1 = require("@material-ui/core/styles");
const Menu_1 = __importDefault(require("@material-ui/core/Menu"));
const MenuItem_1 = __importDefault(require("@material-ui/core/MenuItem"));
const utilty_1 = require("../../../../../utilty");
const theme_1 = __importStar(require("../../../../../styles/theme"));
exports.StyledToolBarMenu = theme_1.default(Menu_1.default) `
right:9% !important;
align-self:center !important;
 display: flex !important;
 justify-content: space-between;
 flex-direction:column !important;
 align-items: center !important;
 @media (max-width: ${theme_1.theme.breakpoints[2]}) {
    right:9% !important;
    a {
        text-align: center;
    }
}  
@media (max-width: ${theme_1.theme.breakpoints[3]}) {
    right:9% !important;

    a {
        text-align: center;
    }
}  
@media (max-width: ${theme_1.theme.breakpoints[5]}) {
    right:9% !important;

    a {
        text-align: center;
    }
}    
`;
exports.StyledMenu = styles_1.withStyles({
    paper: {
        border: '1px solid #d3d4d5',
        background: utilty_1.hexa('#d3d4d5', 0.2),
    },
})((props) => (<exports.StyledToolBarMenu elevation={0} getContentAnchorEl={null} anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'center',
}} transformOrigin={{
    vertical: 'top',
    horizontal: 'center',
}} {...props}/>));
const StyledMenuItem = styles_1.withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.black,
            },
        },
    },
}))(MenuItem_1.default);
exports.StyledToolBarMenuItem = theme_1.default(StyledMenuItem) `
flex:1;
width:6em;
margin:2em 0!important;
height:6em;
align-self:center;
`;
//# sourceMappingURL=styles.jsx.map