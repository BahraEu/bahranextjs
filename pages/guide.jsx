"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guide = void 0;
const react_1 = __importDefault(require("react"));
const Typography_1 = require("../src/styles/Typography");
const Guide = props => {
    console.log(props.children);
    return (<>
            <Typography_1.H6>Guide</Typography_1.H6>
        </>);
};
exports.Guide = Guide;
exports.default = exports.Guide;
//# sourceMappingURL=guide.jsx.map