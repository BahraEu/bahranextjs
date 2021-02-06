"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Typography_1 = require("../src/styles/Typography");
const Security = (props) => {
    console.log(props.children);
    return (<>
      <Typography_1.H6>Security</Typography_1.H6>
      </>);
};
exports.default = Security;
//# sourceMappingURL=security.jsx.map