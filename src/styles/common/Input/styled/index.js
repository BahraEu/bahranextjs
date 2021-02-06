"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = exports.Error = exports.Label = void 0;
const Typography_1 = require("../../../Typography");
const theme_1 = __importDefault(require("../../../theme"));
exports.Label = theme_1.default(Typography_1.H3) `
  font-size: 14;
  text-align: center;
  margin-bottom: 4;
  text-transform: uppercas
  color: ${(props) => props.theme.bg.primary};
`;
exports.Error = theme_1.default(Typography_1.H3) `
  font-size: 14;
  text-align: center;
  margin-top: 4;
  color: ${(props) => props.theme.bg.primary};
`;
exports.Icon = theme_1.default.div `
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 100%;
  color: ${(props) => props.theme.bg.primary};

  ${(props) => props.iconPosition === 'left' &&
    `
        left: 0;
        margin-left: 15px;
    `}
  ${(props) => props.iconPosition === 'right' &&
    `
        right: 0;
        margin-right: 15px;
    `}
`;
//# sourceMappingURL=index.js.map