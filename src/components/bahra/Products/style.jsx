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
exports.AddToCart = exports.RemoveFromCart = exports.TitleAndPrice = exports.ProductsWrap = exports.EventsWrap = exports.ArtistsWrap = exports.Img = exports.Price = exports.ProductWrapper = exports.ImageContainer = exports.Title = exports.DetailsCount = exports.StyledCardContent = exports.ArtistAvatar = exports.ImgWrap = exports.Container = void 0;
const theme_1 = __importStar(require("../../../styles/theme"));
const Typography_1 = require("../../../styles/Typography");
const utilty_1 = require("../../../utilty");
const RemoveCircleRounded_1 = __importDefault(require("@material-ui/icons/RemoveCircleRounded"));
const AddCircle_1 = __importDefault(require("@material-ui/icons/AddCircle"));
const core_1 = require("@material-ui/core");
const Card_1 = __importDefault(require("../../../styles/common/Card"));
exports.Container = theme_1.default(core_1.Grid) `
    background: ${props => utilty_1.hexa(props.theme.bg.inset, 0.6)};
    display: flex;
    position: relative;
    padding: 24px;
    border-radius: 8px;
    transition: ${theme_1.theme.animations.default};
    align-items: flex-start;
    overflow: hidden;
    z-index: 3;
    margin-bottom:2rem;

    &:hover {
        video {
            transition: opacity ${theme_1.theme.animations.default},
                filter ${theme_1.theme.animations.default},
                transform ${theme_1.theme.animations.default};
            transform: rotate3d(0.342, -0.94, 0, 22deg) rotateZ(4deg);
            filter: grayscale(0);
            opacity: 1;
        }
    }
`;
exports.ImgWrap = theme_1.default.div `
height: 16rem;
display: flex;
flex-direction: column;
justify-content: center;

`;
exports.ArtistAvatar = theme_1.default(core_1.Avatar) `
height: 16rem;
display: flex;
flex-direction: column;
justify-content: center;
`;
exports.StyledCardContent = theme_1.default(core_1.CardContent) `
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    padding: 3px 16px;
    z-index: 3;
`;
exports.DetailsCount = theme_1.default(Typography_1.H6) `
    color: ${props => props.theme.text.scondery};
    margin-top: ${theme_1.theme.space[1]};
    font-weight: ${theme_1.theme.fontWeights.link};
`;
exports.Title = theme_1.default(Typography_1.H3) `
    font-size: 18px;
    color: ${props => props.theme.text.tertiary};
    align-self:center;
    justify-content: center;
    display: flex;
    font-weight: 700;
    margin: 0;
    line-height: 1.3;
`;
exports.ImageContainer = theme_1.default.img `
    background: transparent;
    width: 56px;
    height: 56px;
    z-index: 1;
    img {
        width: 56px;
        height: 56px;
        border-radius: 12px !important;
        background: ${props => props.theme.bg.primary};
    }
`;
exports.ProductWrapper = theme_1.default(Card_1.default) `
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    padding: 0.5sem 0.5em !important;
    min-width: 320,
    position: relative,
    box-shadow: 0 8px 24px 0 rgba(0,0,0,0.12),
    overflow: visible,
    border-Radius: 1.5rem,
    transition: 0.4s !important;
    background: ${props => utilty_1.hexa(props.theme.bg.inset3, 0.1)}!important;
    &:hover: {
      transform: translateY(-2px) !important;
      & $shadow: {
        bottom: -1.5rem !important;
      };
      & $shadow2: {
        bottom: -2.5rem !important;
      };
    };
    &:before: {
      position: absolute !important;
      zIndex: 0 !important;
      display: block !important;
      width: 100% !important;
      bottom: -1 !important;
      height: 100% !important;
      border-radius: 1.5rem !important;
      background-color: rgba(0,0,0,0.08) !important;
    };
    margin-buttom 
    &:hover {
        .image {
            opacity: 0.8 !important;
        }

        button {
            opacity: 0.85 !important;
            display: flex !important;
        }
    }
`;
exports.Price = theme_1.default(Typography_1.H2) `
    color: ${theme_1.theme.bg.secondary};
    font-size: 1.2rem;
`;
exports.Img = theme_1.default.img `
    max-height: 15rem;
    max-width: 15rem;
`;
exports.ArtistsWrap = theme_1.default.ul `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0;
    list-style: none;
`;
exports.EventsWrap = theme_1.default.ul `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 4rem;
    padding: 0;
    list-style: none;
`;
exports.ProductsWrap = theme_1.default.ul `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 4rem;
    padding: 0;
`;
exports.TitleAndPrice = theme_1.default.div `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;
exports.RemoveFromCart = theme_1.default(RemoveCircleRounded_1.default) `
display: flex;
flex-direction: row;
justify-content: space-around;
color: ${props => props.theme.bg.primary};
`;
exports.AddToCart = theme_1.default(AddCircle_1.default) `
display: flex;
flex-direction: row;
justify-content: space-around;
color: ${props => props.theme.bg.primary};
`;
//# sourceMappingURL=style.jsx.map