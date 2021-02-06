"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = exports.MainToolsBarContent = exports.StyledMainPaper = exports.MainLayoutContent = exports.InnerGrid = exports.MainLayoutContainer = void 0;
const index_1 = __importDefault(require("../../../styles/theme/index"));
const theme_1 = require("../../../styles/theme");
const utilty_1 = require("../../../utilty");
const core_1 = require("@material-ui/core");
exports.MainLayoutContainer = index_1.default.div `
width: 100%;
height:100%;
margin:0;
background: ${props => utilty_1.tint(props.theme.bg.inset3, 0.1)};
            a {
                border-radius: 4px;
                width: 100%;
                text-align: center;
                margin: 0 2px;
            }
            
          
`;
exports.InnerGrid = index_1.default.div `
    display: flex;
    justify-content: center;
    display: flex;
    justify-content: space-between;
    flex-direction: row !important;
    text-align: center;
    border-radius: 1em !important;
    margin:0 12%;
    @media (max-width: ${theme_1.theme.breakpoints[0]}) {
        margin:0 12%;
     
    }  
    @media (max-width: ${theme_1.theme.breakpoints[1]}) {
        margin:0 6%;
     
    }  
    @media (max-width: ${theme_1.theme.breakpoints[3]}) {
        margin:0 2%;

    
    }
      
    @media (max-width: ${theme_1.theme.breakpoints[5]}) {
        margin:0 0%;
     
    } 
`;
exports.MainLayoutContent = index_1.default(core_1.Grid) `
display: flex;
justify-content: space-between;
flex-direction: row !important;
text-align: center  !important;
width: 100% !important;
height:100% !important;
border-radius: 1em !important;
margin:1% 1%;
          
`;
exports.StyledMainPaper = index_1.default(core_1.Paper) `
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
// background: ${props => hexa(props.theme.bg.inset3,1.0)}!important;
exports.MainToolsBarContent = index_1.default(core_1.Grid) `
height:${props => props.open ? '60%' : '12%'} !important;
width:12% !important;
flex-direction:column !important;
overflow-y: scroll !important;
position: fixed !important;
overflow: hidden !important;
top: 26% !important;
right:12% !important;
padding:0 !important;
display: flex !important;
text-align: center !important;
justify-content: center !important;
align-items: center !important;
border-radius: 2em !important;
background: ${props => props.open
    ? utilty_1.hexa(props.theme.bg.inset, 0.8)
    : utilty_1.hexa(props.theme.bg.inset1, 0.4)} !important;
@media (max-width: ${theme_1.theme.breakpoints[0]}) {
    right:6% !important;
    top: 26% !important;
}
@media (max-width: ${theme_1.theme.breakpoints[1]}) {
    height:${props => props.open ? '60%' : '12%'} !important;
    width:12% !important;
    right:6% !important;
    top: 26% !important;

    a {
        text-align: center;
    }
}  
@media (max-width: ${theme_1.theme.breakpoints[3]}) {
    height:${props => props.open ? '60%' : '12%'} !important;
    width:${props => props.open ? '9%' : '12%'} !important;
    right:4% !important;
    top: 32% !important;

    a {
        text-align: center;
    }
}  
@media (max-width: ${theme_1.theme.breakpoints[5]}) {
    width:12% !important;
    right:2% !important;
    top: 36% !important;
}
@media (max-width: ${theme_1.theme.breakpoints[6]}) {
    width:15% !important;
    right:1% !important;
    top: 40% !important;
}                   
`;
exports.Label = index_1.default.span `
    display: flex;

    a {
        text-align: center;
        background: ${props => (props.active ? utilty_1.hexa(props.theme.bg.primary, 0.04) : 'none')};
        color: ${props => (props.active ? props.theme.text.link : props.theme.text.secondary)};
    }

    a:hover {
        background: ${props => props.active
    ? utilty_1.hexa(props.theme.text.link, 0.08)
    : utilty_1.hexa(props.theme.text.secondary, 0.04)};
    }

    @media (max-width: ${theme_1.theme.breakpoints[1]}) {
        width: 100%;

        a {
            text-align: left;
        }
    }
`;
//# sourceMappingURL=mainLayoutStyle.js.map