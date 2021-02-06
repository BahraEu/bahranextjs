"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@material-ui/core");
const theme_1 = __importDefault(require("../../../theme"));
const Input = theme_1.default(core_1.TextField) `
  background-color: ${(props) => props.theme.bg.primary};
  border: 1px solid ${(props) => props.theme.bg.primary};
  border-radius: ${(props) => props.theme.radii[1]};
  width: 100%;
  padding: 0 0px;
  height: 48;
  color: ${(props) => props.theme.bg.primary};
  font-size: ${(props) => props.theme.fontSizes[1]};

  ${(props) => props.isFocused &&
    `
        border: 1px solid ${(props) => props.theme.bg.primary};
        background-color: ${(props) => props.theme.bg.primary};
        box-shadow: ${(props) => props.theme.shadow[1]};;
    `}

  ${(props) => props.error &&
    `
        background-color: ${(props) => props.theme.bg.primary};
        border: 1px solid ${(props) => props.theme.bg.primary};
    `}

    ${(props) => props.error &&
    props.isFocused &&
    `
        box-shadow:${(props) => props.theme.shadow[1]};;
        padding: 0 16px;
    `}

    ${(props) => props.disabled &&
    `
        background-color:${(props) => props.theme.bg.primary};
        color: ${(props) => props.theme.bg.primary};
    `}
    ${(props) => props.hasIcon &&
    props.iconPosition === 'left' &&
    `
        padding-left: 45px;
    `}
    ${(props) => props.hasIcon &&
    props.iconPosition === 'right' &&
    `
        padding-right: 45px;
    `}
`;
exports.default = Input;
//# sourceMappingURL=input.js.map