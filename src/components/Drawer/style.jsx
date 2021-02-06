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
exports.Label = exports.StyledLink = exports.StyledDrawer = void 0;
const core_1 = require("@material-ui/core");
const utilty_1 = require("../../utilty");
const theme_1 = __importStar(require("../../styles/theme"));
const routes_1 = require("../../services/routes/routes");
const Typography_1 = require("../../styles/Typography");
exports.StyledDrawer = theme_1.default(core_1.Grid) `
background-color: ${props => utilty_1.hexa(props.theme.bg.inset3, 0.3)}!important;
display: flex;
align-items: center;!important;
justify-content: space-around;
flex-direction:column;!important;

`;
exports.StyledLink = theme_1.default(routes_1.Link) `
align-items: center;
justify-content: center;
color: ${props => utilty_1.hexa(props.theme.bg.inset, 0.2)}!important;
flex-direction:clomen;
a {
  overflow: hidden;
  border-radius: 8px;
  transition: box-shadow ${theme_1.theme.animations.default};
  color: ${props => utilty_1.hexa(props.theme.bg.inset, 0.2)}!important;
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
exports.Label = theme_1.default(Typography_1.H3) `
    display: flex;
    flex: 1;

    a {
        text-align: center;
    }

    @media (max-width: ${theme_1.theme.breakpoints[4]}) {
        width: 100%;

        a {
            text-align: center;
        }
    }
`;
// export const NEXT = "NEXT";
// export const PREV = "PREV";
// export const Item = styled.div`
//   text-align: center;
//   padding: 100px;
//   background-image: ${(props) => `url(${props.img})`};
//   background-size: cover;
// `;
// export const CarouselContainer = styled.div`
//   display: flex;
//   transition: ${(props) => (props.sliding ? "none" : "transform 1s ease")};
//   transform: ${(props) => {
//     if (!props.sliding) return "translateX(calc(-80% - 20px))";
//     if (props.dir === PREV) return "translateX(calc(2 * (-80% - 20px)))";
//     return "translateX(0%)";
//   }};
// `;
// export const Wrapper = styled.div`
//   width: 100%;
//   overflow: hidden;
//   box-shadow: 5px 5px 20px 7px rgba(168, 168, 168, 1);
// `;
// export const CarouselSlot = styled.div`
//   flex: 1 0 100%;
//   flex-basis: 80%;
//   margin-right: 20px;
//   order: ${(props) => props.order};
// `;
// export const SlideButton = styled.button`
//     color: #ffffff;
//     font-family: Open Sans;
//     font-size: 16px;
//     font-weight: 100;
//     padding: 10px;
//     background-color: #f66f3e;
//     border: 1px solid white;
//     text-decoration: none;
//     display: inline-block;
//     cursor: pointer;
//   margin-top: 20px;
//   text-decoration: none;
//   float: ${(props) => props.float};
//   &:active {
//     position: relative;
//     top: 1px;
//   }
//   &:focus {
//     outline: 0;
//   }
// `;
// export const AppContainer = styled.div`
//   font-family: sans-serif;
//   text-align: center;
//   width: 75%;
//   height: 1000px;
// `;
// export const Code = styled.code`
//   background-color: rgba(27, 31, 35, 0.05);
//   border-radius: 3px;
//   margin: 0;
//   padding: 0.2em 0.4em;
// `;
//# sourceMappingURL=style.jsx.map