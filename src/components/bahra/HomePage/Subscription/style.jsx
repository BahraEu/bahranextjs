"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = exports.Input = exports.SubscribeButton = exports.SubscriptionWrapper = exports.Row = exports.FieldErrorRow = exports.SubscribeRow = exports.FieldError = exports.SubscriptionStyle = void 0;
// import theme from '@styles/theme';
const styled_components_1 = __importDefault(require("styled-components"));
const formik_1 = require("formik");
exports.SubscriptionStyle = styled_components_1.default.div `
    display: block;
    padding-left: 10px;
    padding-right: 10px;
    background-color: ${props => props.theme.bg.primary};
    align-items: center;
    display: flex;
    width: 100%;
    justify-content: center;
`;
exports.FieldError = styled_components_1.default.div `
    color: ${props => props.theme.bg.secondary};
    display: block;
`;
exports.SubscribeRow = styled_components_1.default.div `
    align-items: center;
    display: flex;
    width: 100%;
    justify-content: center;
`;
exports.FieldErrorRow = styled_components_1.default.div `
    padding-top: 10px;
    height: 40px;
`;
exports.Row = styled_components_1.default.div `
    align-items: center;
    display: flex;
    width: 100%;
    justify-content: center;
`;
exports.SubscriptionWrapper = styled_components_1.default.div `
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 800px;
`;
exports.SubscribeButton = styled_components_1.default.button `
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
    // border-radius: 0px 20px 20px 0px;
    border: 1px solid ${props => props.theme.bg.secondary};
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
exports.Input = styled_components_1.default(formik_1.Field) `
    width: 100%;
    max-width: 340px;
    height: 14px;
    font-size: 18px;
    outline: none !important;
    border-radius: 4px 0px 0px 4px;
    color: ${props => props.theme.bg.secondary};
    line-height: 65px;
    background-color: white !important;
    font-weight: bold;
    outline: none !important;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: none !important;
    @media (max-width: $breakpoint-mobile) {
      max-width: 260px;
    }
  }
  &:focus {
    outline: none !important;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: none !important;
  }
  &:hover {
    outline: none !important;
    border: none !important;
    box-shadow: none;
    // border-color:${props => props.theme.bg.inset};
  }
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.bg.inset};
  padding-top: 1rem;
  padding-bottom: 1.2em;
  width: 100%;
  `;
exports.Label = styled_components_1.default.label `
    margin-bottom: 1.2em;
    width: 40%;
`;
//# sourceMappingURL=style.jsx.map