"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledParallax = void 0;
const theme_1 = __importDefault(require("@styles/theme"));
const _utilty_1 = require("@utilty");
const react_1 = __importDefault(require("react"));
const Parallax_1 = __importDefault(require("./Parallax"));
exports.StyledParallax = theme_1.default((_a) => {
    var { color } = _a, otherProps = __rest(_a, ["color"]);
    return <Parallax_1.default {...otherProps}/>;
}) `
color: ${props => _utilty_1.hexa(props.theme.bg.inset3, 0.4)}) !important;
background-position: center ;
height: 90vh;
maxHeight: 1000px;
overflow: hidden;
position: relative;
backgroundPosition: center center;
backgroundSize: cover;
display: flex;
align-items: center;
justify-content: center;
margin: 0;
padding: 0;
border: 0;
display: flex;
background-repeat: no-repeat;

alignItems: center;
filter: {
&:before: {
  background: rgba(0; 0; 0; 0.5)
};
&:after;&:before: {
  position: absolute;
  zIndex: 1;
  width: 100%;
  height: 100%;
  display: block;
  left: 0;
  top: 0;
  content: ''
}
};
small: {
height: 380px
}
`;
//# sourceMappingURL=styles.jsx.map