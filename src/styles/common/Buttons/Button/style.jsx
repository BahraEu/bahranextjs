"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopyLinkButton = exports.TwitterButton = exports.OutlineButton = exports.GhostButton = exports.PrimaryButton = exports.Button = void 0;
const utilty_1 = require("../../../../utilty");
const core_1 = require("@material-ui/core");
const theme_1 = __importDefault(require("../../../theme"));
exports.Button = theme_1.default(core_1.ButtonBase) `
  border: 1px solid ${(props) => props.theme.border.default};
  color: ${(props) => props.theme.text.secondary};
  background-color: ${(props) => props.theme.bg.secondary};
  align-items: center !important;
  background-image: ${(props) => `linear-gradient(to bottom, ${props.theme.bg.secondary}, ${props.theme.bg.primary})`};

  &:hover {
    color: ${(props) => props.theme.text.primary};
  }

  &:active {
    border: 1px solid ${(props) => props.theme.border.opaque};
    background-image: ${(props) => `linear-gradient(to top, ${props.theme.bg.secondary}, ${props.theme.bg.primary})`};
  }

  &:focus {
    box-shadow: 0 0 0 1px ${(props) => props.theme.bg.primary},
      0 0 0 3px ${(props) => props.theme.border.default};
  }
`;
exports.PrimaryButton = theme_1.default(exports.Button) `

`;
exports.GhostButton = theme_1.default(exports.Button) `
  color: ${(props) => props.theme.text.secondary};
  box-shadow: none;
  background-color: transparent;
  background-image: none;

  &:hover {
    background: ${(props) => utilty_1.tint(props.theme.bg.primary, -3)};
    color: ${(props) => props.theme.text.primary};
    box-shadow: none;
  }

  &:focus {
    box-shadow: 0 0 0 1px ${(props) => props.theme.bg.primary},
      0 0 0 3px ${(props) => utilty_1.hexa(props.theme.text.tertiary, 0.08)};
  }
`;
exports.OutlineButton = theme_1.default(exports.Button) `
  border: 1px solid ${(props) => props.theme.border.default};
  color: ${(props) => props.theme.text.secondary};
  background-color: transparent;
  background-image: none;

  &:hover {
    color: ${(props) => props.theme.text.primary};
    border: 1px solid ${(props) => props.theme.border.opaque};
    box-shadow: none;
  }

  &:active {
    border: 1px solid ${(props) => props.theme.text.placeholder};
  }

  &:focus {
    box-shadow: 0 0 0 1px ${(props) => props.theme.bg.primary},
      0 0 0 3px ${(props) => props.theme.border.default};
  }
`;
exports.TwitterButton = theme_1.default(exports.Button) `
  border: 1px solid ${(props) => props.theme.social.twitter};
  color: ${(props) => props.theme.bg.inset1};
  background-color: ${(props) => props.theme.social.twitter};
  background-image: ${(props) => `linear-gradient(to bottom, ${props.theme.social.twitter}, ${props.theme.social.twitter})`};

  .icon {
    margin-right: 8px;
    margin-left: -4px;
  }

  &:hover {
    color: ${(props) => props.theme.text.onPrimary};
    background-image: ${(props) => `linear-gradient(to bottom, ${utilty_1.tint(props.theme.social.twitter, 4)}, ${utilty_1.tint(props.theme.social.twitter, 4)})`};
    box-shadow: ${(props) => props.disabled ? 'none' : props.theme.shadows.button};
  }

  &:active {
    border: 1px solid ${(props) => props.theme.social.twitter};
    background-image: ${(props) => `linear-gradient(to top, ${props.theme.social.twitter}, ${props.theme.social.twitter})`};
  }

  &:focus {
    box-shadow: 0 0 0 1px ${(props) => props.theme.bg.inset},
      0 0 0 3px ${(props) => utilty_1.hexa(props.theme.social.twitter, 0.16)};
  }
`;
exports.CopyLinkButton = theme_1.default(exports.Button) `
  border: 1px solid transparent;
  color: ${(props) => props.isClicked ? props.theme.bg.secondary : props.theme.text.secondary};
  background-color: ${(props) => props.isClicked ? props.theme.accent.green : props.theme.bg.secondary};
  transition: border 0.2s ease-in-out, background-color 0.2s ease-in-out,
    background-image 0.2s ease-in-out;

  &:hover {
    transition: border 0.2s ease-in-out, background-color 0.2s ease-in-out,
      background-image 0.2s ease-in-out;
    color: ${(props) => props.isClicked ? props.theme.bg.secondary : props.theme.text.primary};
  }

  &:active {
    border: 1px solid transparent;
  }

  .icon {
    margin-right: 8px;
    margin-left: -4px;
  }

  &:focus {
    box-shadow: 0 0 0 1px ${(props) => props.theme.bg.secondary},
      0 0 0 3px
        ${(props) => props.isClicked
    ? utilty_1.hexa(props.theme.accent.green, 0.16)
    : props.theme.border.default};
  }
`;
//# sourceMappingURL=style.jsx.map