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
const core_1 = require("@material-ui/core");
const index_1 = __importStar(require("../../../../theme/index"));
const utilty_1 = require("../../../../../utilty");
var ButtonColor;
(function (ButtonColor) {
    ButtonColor[ButtonColor["primary"] = 0] = "primary";
    ButtonColor[ButtonColor["info"] = 1] = "info";
    ButtonColor[ButtonColor["success"] = 2] = "success";
    ButtonColor[ButtonColor["warning"] = 3] = "warning";
    ButtonColor[ButtonColor["danger"] = 4] = "danger";
    ButtonColor[ButtonColor["rose"] = 5] = "rose";
    ButtonColor[ButtonColor["white"] = 6] = "white";
    ButtonColor[ButtonColor["facebook"] = 7] = "facebook";
    ButtonColor[ButtonColor["twitter"] = 8] = "twitter";
    ButtonColor[ButtonColor["google"] = 9] = "google";
    ButtonColor[ButtonColor["github"] = 10] = "github";
    ButtonColor[ButtonColor["transparent"] = 11] = "transparent";
})(ButtonColor || (ButtonColor = {}));
const StyledButton = index_1.default(core_1.ButtonBase) `
  align-items: center !important;
  display: flex !important;
  flex-direction: row !important;
  justify-content: center !important;
  position: relative !important;
  border: 1px solid transparent !important;
  border-radius: 100px !important;
  background-color: ${props => props.theme.bg.primary}!important !important;
  text-decoration: none !important;
  padding-vertical: 0 !important;
  position: relative !important;
  height:40px !important;
  width:120px !important;
  border: 1px solid ${(props) => props.theme.accent.blue} !important;
  color: ${(props) => props.theme.bg.secondary} !important;
  background-color: ${(props) => props.theme.accent.blue} !important;
  background-image: ${(props) => `linear-gradient(to bottom, ${props.theme.accent.blue}, ${props.theme.accent.blue})`} !important;

  &:hover {
    color: ${(props) => props.theme.text.onPrimary} !important;
    background-image: ${(props) => `linear-gradient(to bottom, ${utilty_1.tint(props.theme.accent.blue, 16)}, ${utilty_1.tint(props.theme.accent.blue, 16)})`};
    box-shadow: ${(props) => (props.disabled ? 'none' : index_1.theme.shadows.button)} !important;
  }

  &:active {
    border: 1px solid ${(props) => props.theme.accent.blue} !important;
    background-image: ${(props) => `linear-gradient(to top, ${props.theme.accent.blue}, ${props.theme.accent.blue})`} !important;
  }

  &:focus {
    box-shadow: 0 0 0 1px ${(props) => props.theme.bg.secondary},
      0 0 0 3px ${(props) => utilty_1.hexa(props.theme.accent.blue, 0.16)} !important;
  }
  ${(props) => props.variant === 'neutral' &&
    `
            background-color: ${(props) => props.theme.bg.inset1} !important;
            border: 1px solid ${(props) => props.theme.bg.inset} !important;
        `};
  ${(props) => props.variant === 'brand' &&
    `
            background-color: ${(props) => props.theme.bg.primary} !important;
            border: 1px solid ${(props) => props.theme.bg.secondary} !important;
        `};
  ${(props) => props.variant === 'outline-brand' &&
    `
            background-color: transparent;
            border: 1px solid ${(props) => props.theme.bg.secondary} !important;
        `};
  ${(props) => props.variant === 'destructive' &&
    `
            background-color: ${(props) => props.theme.bg.primary} !important;
            border: 1px solid ${(props) => props.theme.bg.primary} !important;
        `};
  ${(props) => props.variant === 'success' &&
    `
            background-color: ${index_1.theme.success[2]}!important;
            border: 1px solid ${index_1.theme.success[1]}!important;
        `};
  ${(props) => props.hasRightIcon &&
    `
            padding-right: 44 !important;

        `};
  ${(props) => props.hasLeftIcon &&
    `
            padding-left: 44 !important;

        `};
  ${(props) => props.disabled &&
    `
            background-color: ${index_1.theme.warnings[1]}!important;
            border: 1px solid transparent !important;
        `};
`;
exports.default = StyledButton;
//# sourceMappingURL=button.js.map