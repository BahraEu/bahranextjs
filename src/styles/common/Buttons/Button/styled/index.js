"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledText = exports.StyledIcon = void 0;
const theme_1 = __importDefault(require("../../../../../styles/theme"));
const Typography_1 = require("../../../../../styles/Typography");
exports.StyledIcon = theme_1.default.div `
  position: absolute;
  ${(props) => props.iconPosition === 'right' &&
    `
            margin-left: 16;
            right: 16;

        `};
  ${(props) => props.iconPosition === 'left' &&
    `
            margin-right: 16;
            left: 16;
        `};
`;
exports.StyledText = theme_1.default(Typography_1.H4) `
  color: ${(props) => props.theme.text.primary};
  font-size: ${(props) => props.theme.fontSizes[1]};
  text-align: center;

  ${(props) => (props.variant === 'brand' ||
    props.variant === 'destructive' ||
    props.variant === 'success') &&
    `color: ${(props) => props.theme.bg.primary};`};

  ${(props) => props.disabled && `color: ${(props) => props.theme.bg.primary}`};
`;
//# sourceMappingURL=index.js.map