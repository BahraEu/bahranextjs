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
exports.AnimatedBox = exports.TextWrapper = exports.TitleWrapper = exports.AnimatedItem = exports.GridContainer = exports.SingleContentGrid = exports.Icon = exports.Title = exports.DetailsBlog = exports.BlogsWrap = exports.styledCardContent = exports.Date = void 0;
const theme_1 = __importStar(require("../../../styles/theme"));
const Typography_1 = require("../../../styles/Typography");
const utilty_1 = require("../../../utilty");
const core_1 = require("@material-ui/core");
const react_spring_1 = require("react-spring");
exports.Date = theme_1.default(Typography_1.H3) `
  color: ${props => props.theme.text.link};
  font-weight: ${theme_1.theme.fontWeights.link};
`;
exports.styledCardContent = theme_1.default.div `
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto  3fr 1fr;
  grid-gap: ${theme_1.theme.space[3]};
  height: 100%;
  position: relative;
  z-index: 2;
`;
exports.BlogsWrap = theme_1.default.ul `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 4rem;
    padding: 0;
`;
exports.DetailsBlog = theme_1.default(Typography_1.H3) `
    color: ${props => props.theme.text.scondery};
    font-weight: ${theme_1.theme.fontWeights.link};
`;
exports.Title = theme_1.default(Typography_1.H3) `
    font-size: 18px;
    color: ${props => props.theme.text.onPrimary};
    align-self:center;
    justify-content: center;
    display: flex;
    font-weight: 700;
    margin: 0;
    line-height: 1.3;
`;
exports.Icon = theme_1.default.img `
  box-shadow: ${theme_1.theme.shadows.default};
  transition: box-shadow ${theme_1.theme.animations.default};
  border-radius: 16px;
  overflow: hidden;
  width: 64px;
  height: 64px;
  &:hover {
    transition: box-shadow ${theme_1.theme.animations.hover};
    box-shadow: ${theme_1.theme.shadows.hover};
  }

  &:active {
    box-shadow: ${theme_1.theme.shadows.hover};
  }
`;
exports.SingleContentGrid = theme_1.default.img `
  display: grid;
  grid-template-columns: repeat(3}, 1fr);
  grid-gap: ${theme_1.theme.space[3]};
  grid-auto-rows: auto;
  width: 100%;
  max-width: ${theme_1.theme.breakpoints[0]};
  margin-top: ${theme_1.theme.space[5]};

  a {
    overflow: hidden;
    border-radius: 8px;
    transition: box-shadow ${theme_1.theme.animations.default};
  }

  a:hover {
    box-shadow: ${theme_1.theme.shadows.largeHover};
    transition: box-shadow ${theme_1.theme.animations.hover};
  }

  @media (max-width: ${theme_1.theme.breakpoints[1]}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme_1.theme.breakpoints[4]}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
exports.GridContainer = theme_1.default(core_1.Grid) `
display: grid !important;
background-color: ${props => utilty_1.hexa(props.theme.bg.inset, 0.6)} !important;
padding:0.1% 0.1% !important;
grid-template-columns: repeat(3, 1fr)  !important;
grid-gap: ${theme_1.theme.space[0]}  !important;
@media (max-width: ${theme_1.theme.breakpoints[1]}) {
  grid-template-columns: repeat(2, 1fr)  !important;
}
@media (max-width: ${theme_1.theme.breakpoints[4]}) {
  grid-template-columns: repeat(1, 1fr)  !important;
}
`;
exports.AnimatedItem = theme_1.default(react_spring_1.animated(core_1.Box)) `
  cursor: pointer !important;
  width:100% !important;
  height: 100% !important;
  background-image: ${props => props.background} !important;
  background-size: cover !important;
  background-position: center  !important;
  backgrounds-repeat: no-repeat !important;
  justify-content: space-evenly !important;
  alignItems: center !important;
  flex-direction: column !important;
  display: flex !important;
  justify-content: space-around !important;
`;
exports.TitleWrapper = theme_1.default(react_spring_1.animated(core_1.Box)) `
  justify-content: center !important;
  align-self: center !important;
  width:40% !important;
  bottom:0% !important;
  font-family:${theme_1.theme.fonts.Raleway[1]}!important;
  text-align: center !important;
  color: ${props => props.theme.text.onPrimary}!important;
  top:12px !important;
  padding:1% 1% !important;
  font-weight: ${theme_1.theme.fontWeights.link};
  background:${props => utilty_1.hexa(props.theme.bg.inset3, 0.8)};
`;
exports.TextWrapper = theme_1.default(react_spring_1.animated(core_1.Box)) `
  overflow: hidden  !important;
  flex-direction: column  !important;
  justify-ontent: center !important;
  textAlign: center !important;
  height: 40%0%!important;
  background: ${props => utilty_1.hexa(props.theme.bg.inset3, 0.3)}!important;;
  fontSize: ${theme_1.theme.fontSizes[3]} !important;
`;
exports.AnimatedBox = theme_1.default(react_spring_1.animated(core_1.Box)) `


`;
//# sourceMappingURL=style.jsx.map