"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = exports.Input = exports.LogInButton = exports.FieldErrorRow = exports.LogInRow = exports.FieldError = exports.LogInStyle = exports.LogInWrapper = void 0;
const formik_1 = require("formik");
const _utilty_1 = require("@utilty");
const theme_1 = __importDefault(require("../../../styles/theme"));
const core_1 = require("@material-ui/core");
exports.LogInWrapper = theme_1.default(core_1.Grid) `
    display: flex;
    width: 100vw;
    justify-content: center;
    align-items: center;
    align-self: center;
    flex-direction: column !important;
    align-self: center;
    position:relative;
    padding:6em;
    background-color: ${props => props.theme.bg.inset};
`;
exports.LogInStyle = theme_1.default.div `
    padding: 6em;
    background-color: ${props => props.theme.bg.inset3};
    align-items: center;
    flex-direction: column;
    display: flex;
    width: 100%;
    justify-content: center;
`;
exports.FieldError = theme_1.default.div `
    color: ${props => props.theme.bg.secondary};
    display: block;
`;
exports.LogInRow = theme_1.default.div `
    align-items: center;
    display: flex;
    width: 100%;
    justify-content: center;
`;
exports.FieldErrorRow = theme_1.default(formik_1.ErrorMessage) `
    padding-top: 10px;
`;
exports.LogInButton = theme_1.default.button `
    cursor: pointer;
    background-color: ${props => props.theme.bg.secondary};
    padding-left: 2em;
    padding-top: 0.6em;
    padding-right: 2em;
    padding-bottom: 0.6em;
    color: white;
    font-weight: bold;
    font-size: 18px;
    border-radius: 0px 4px 4px 0px;
    height: 51px;
    border: 2px solid ${props => props.theme.bg.primary};
    border-radius: 5px;
    border: 1px solid ${props => props.theme.bg.inset1};
    outline: 0px;
    &--smaller {
        padding: 0.9em;
        font-size: 14px;
    }
    &:hover {
        background-color: ${props => props.theme.bg.inset};
        cursor: pointer;
    }
    &:disabled {
        cursor: pointer;
        background-color: rgb(163, 168, 173);
        box-shadow: none;
        color: rgb(255, 255, 255) !important;
        &:focus {
            cursor: not-allowed;
        }
    }
`;
exports.Input = theme_1.default(formik_1.Field) `
    width: 4em;
    height: 14px;
    font-size: 18px;
    outline: none !important;
    border-radius: 4px 4px 4px 4px;
    color: ${props => _utilty_1.hexa(props.theme.bg.secondary, 0.8)};
    border-color:${props => _utilty_1.hexa(props.theme.bg.primary, 0.8)};
    line-height: 65px;
    background-color: white !important;
    font-weight: bold;
    -webkit-box-shadow: none;
    box-shadow: none;
    @media (max-width: $breakpoint-mobile) {
      max-width: 260px;
    }
  }
  &:focus {
    outline: none !important;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-color:${props => _utilty_1.hexa(props.theme.bg.primary, 0.4)};
    border-radius: 4px 4px 4px 4px;
  }
  &:hover {
    outline: none !important;
    box-shadow: none;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.bg.inset};
  padding-top: 1em;
  padding-bottom: 1.2em;
  width: 100%;
  `;
exports.Label = theme_1.default.label `
    width: 100%;
`;
//# sourceMappingURL=style.jsx.map