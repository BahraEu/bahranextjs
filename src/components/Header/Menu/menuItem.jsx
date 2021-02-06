"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_spring_1 = require("react-spring");
const theme_1 = __importDefault(require("../../../styles/theme"));
const core_1 = require("@material-ui/core");
const _utilty_1 = require("@utilty");
const utilty_1 = require("../../../utilty");
const Item = theme_1.default(core_1.MenuItem) `
  padding: 18px 10px 10px 10px;
  margin: 0px;
  position: relative;
  display: block;
  background-color:${props => _utilty_1.hexa(props.theme.bg.inset3, 0.1)}!important;
  overflow: hidden;
  text-align: left;
  cursor: pointer;
  color: black;
  background: white;
  &:hover {
    text-align: center;
  }
  &:active {
    text-align: center;
    background-color:${props => utilty_1.tint(props.theme.bg.inset3, 0.1)}!important;

  }
`;
const StyledMenuItem = ({ content }) => {
    const [{ x, color }, set] = react_spring_1.useSpring(() => ({ x: 100, color: "black" }));
    return (<div>
      <Item onMouseEnter={() => set({ x: 0, color: "white" })} onMouseDown={() => set({ x: 0, color: "white" })} onMouseLeave={() => set({ x: 100, color: "black" })}>
        <react_spring_1.animated.span style={{ color }}>{content}</react_spring_1.animated.span>
        <react_spring_1.animated.p style={{ transform: x.interpolate(v => `translateX(-${v}%`) }} className="glance"/>
      </Item>
    </div>);
};
exports.default = StyledMenuItem;
//# sourceMappingURL=menuItem.jsx.map