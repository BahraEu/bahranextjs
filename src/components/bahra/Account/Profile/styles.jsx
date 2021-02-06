"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilePageStyleImage = exports.ProfilePageStyleTitle = exports.ProfilePageStyleSocials = exports.ProfilePageStyleMain = exports.ProfilePageDescription = exports.ProfilePageStyle = exports.ProfileSection = exports.ProfilePageStylecontainer = void 0;
const materialReact_1 = require("../../../../styles/common/mu/materialReact");
const imagesStyles_1 = __importDefault(require("../../../../styles/common/mu/imagesStyles"));
const theme_1 = __importDefault(require("../../../../styles/theme"));
const core_1 = require("@material-ui/core");
const Typography_1 = require("../../../../styles/Typography");
const utilty_1 = require("../../../../utilty");
exports.ProfilePageStylecontainer = theme_1.default(core_1.Grid) `



`;
exports.ProfileSection = theme_1.default(core_1.Grid) `
 margin: -40px 0px 0px !important;
    border-radius: 6px !important;
    boxShadow:
      0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)important;
`;
exports.ProfilePageStyle = theme_1.default(core_1.Avatar) `
      margin: 0 0 auto !important;
      color: ${props => utilty_1.hexa(props.theme.bg.inset3, 8)}) !important;
      transform: translate3d(0, -50%, 0)!important;
      `;
exports.ProfilePageDescription = theme_1.default(core_1.Grid) `
margin: 1.071rem auto 0 !important;
max-width: 600px !important;
color: #999 !important;
text-align: center !important
`;
exports.ProfilePageStyleMain = theme_1.default.div `
margin: -60px 30px 0px !important;
background: #FFFFFF !important;
position: relative !important;
zIndex: 3 !important;
border-radius: 6px !important;
box-shadow:
  0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)
`;
exports.ProfilePageStyleSocials = theme_1.default(core_1.Grid) `
margin-top: 0 !important;
width: 100% !important;
transform: none !important;
left: 0 !important;
top: 0 !important;
height: 100% !important;
line-height: 41px !important;
font-size: 20px !important;
color: #999
`;
exports.ProfilePageStyleTitle = theme_1.default(Typography_1.H1) `
...title !important;
display: flex !important;
position: relative !important;
margin-top: 30px !important;
min-height: 32px !important;
`;
exports.ProfilePageStyleImage = theme_1.default.img `
margin: 20px auto 50px auto !important;
text-align: center !important;
`;
const ProfileStyle = Object.assign(Object.assign({ container: materialReact_1.container, profile: {
        textAlign: "center",
        "& img": {
            maxWidth: "160px",
            width: "10%",
            margin: "0 auto",
            transform: "translate3d(0, -50%, 0)"
        }
    }, description: {
        margin: "1.071rem auto 0",
        maxWidth: "600px",
        color: "#999",
        textAlign: "center !important"
    }, name: {
        marginTop: "-80px"
    } }, imagesStyles_1.default), { main: {
        background: "#FFFFFF",
        position: "relative",
        zIndex: "3"
    }, mainRaised: {
        margin: "-60px 30px 0px",
        borderRadius: "6px",
        boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    }, title: Object.assign(Object.assign({}, materialReact_1.title), { display: "inline-block", position: "relative", marginTop: "30px", minHeight: "32px", textDecoration: "none" }), socials: {
        marginTop: "0",
        width: "100%",
        transform: "none",
        left: "0",
        top: "0",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px",
        color: "#999"
    }, navWrapper: {
        margin: "20px auto 50px auto",
        textAlign: "center"
    } });
exports.default = ProfileStyle;
//# sourceMappingURL=styles.jsx.map