"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledCounter = exports.StyledAvatar = exports.StyledAvatarContainer = exports.StyledContainer = void 0;
const native_1 = __importDefault(require("styled-components/native"));
exports.StyledContainer = native_1.default.View `
  display: flex;
  flex-direction: row;
`;
exports.StyledAvatarContainer = native_1.default.View `
  display: flex;
  flex-direction: row;
`;
const sizes = {
    large: 48,
    medium: 32,
    small: 24,
    'x-small': 20,
};
exports.StyledAvatar = native_1.default.View `
    border: solid ${(props) => props.theme.bg.primary}; 2px;
    ${(props) => props.zIndex &&
    `
        z-index: ${props.zIndex};
    `}

    ${(props) => props.size &&
    `
        margin-left: -${sizes[props.size] / 1.8}
        border-radius: ${sizes[props.size] / 1.8};
    `}

    ${(props) => props.firstChild &&
    `
        margin-left: 0;
    `};
`;
exports.StyledCounter = native_1.default.View `
  border: solid 2px ${(props) => props.theme.bg.primary};
  z-index: 10;
  ${(props) => props.size &&
    `
        border-radius: ${sizes[props.size] / 1.8};
        margin-right: -${sizes[props.size] / 1.8}
    `};
`;
//# sourceMappingURL=index.js.map