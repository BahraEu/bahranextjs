"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsWrapper = void 0;
const core_1 = require("@material-ui/core");
const theme_1 = __importDefault(require("../../../styles/theme"));
const utilty_1 = require("../../../utilty");
exports.EventsWrapper = theme_1.default(core_1.Card) `
display: flex !important;
flex-direction: column !important;
align-items: center !important;
padding: 0.5em 0.5em !important;
min-width: 320;
position: relative;
box-shadow: 0 8px 24px 0 rgba(0,0,0,0.12);
overflow: visible;
border-Radius: 1.5%;
margin:2% 0.2%;
background: ${props => utilty_1.hexa(props.theme.bg.inset3, 0.1)}!important;
&:hover: {
  transform: translateY(-2px) !important;
  & $shadow: {
    bottom: 1.5% !important;
  };
  & $shadow2: {
    bottom: 2.5% !important;
  };
};
&:before: {
  position: absolute !important;
  zIndex: 0 !important;
  display: block !important;
  width: 100% !important;
  bottom: -1 !important;
  height: 100% !important;
  border-radius: 1.5% !important;
  background-color: rgba(0,0,0,0.08) !important;
};
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
//# sourceMappingURL=styles.jsx.map