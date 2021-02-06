"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledTextBadge = exports.StyledBadge = exports.StyledBadgeContainer = void 0;
const native_1 = __importDefault(require("styled-components/native"));
exports.StyledBadgeContainer = native_1.default.View `
  align-self: center;
`;
exports.StyledBadge = native_1.default.View `
  border-width: 1px;
  padding: 2px 10px;
  text-align: center;
  border-radius: 16px;
  overflow: hidden;
  ${(props) => props.variant === 'default' &&
    `
        background-color: ${(props) => props.theme.bg.primary};
        border-color: transparent;
    `};

  ${(props) => props.variant === 'lightest' &&
    `
        background-color: ${(props) => props.theme.bg.primary};
        border-color: ${(props) => props.theme.bg.primary};
    `}

  ${(props) => props.variant === 'outline-brand' &&
    `
        color:${(props) => props.theme.bg.primary};
        border-color: ${(props) => props.theme.bg.primary};
    `}

    ${(props) => props.variant === 'brand' &&
    `
        color: ${(props) => props.theme.bg.primary};
        background-color: ${(props) => props.theme.bg.primary};
        border-color: ${(props) => props.theme.bg.primary};
    `}
`;
exports.StyledTextBadge = native_1.default.Text `
  ${(props) => props.variant === 'default' &&
    `
        color:${(props) => props.theme.bg.primary};
    `}
  ${(props) => props.variant === 'lightest' &&
    `
        color: ${(props) => props.theme.bg.primary};
    `}
    ${(props) => props.variant === 'outline-brand' &&
    `
        color: ${(props) => props.theme.bg.primary};
    `}
    ${(props) => props.variant === 'brand' &&
    `
        color: ${(props) => props.theme.bg.primary};
    `}
`;
//# sourceMappingURL=index.js.map