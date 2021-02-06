"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const spinner_style_1 = require("@styles/spinner/spinner.style");
const Body = (props) => {
    const { isLoading, children } = props;
    if (isLoading)
        return <spinner_style_1.Spinner />;
    if (children)
        return children;
};
Body.propTypes = {
    isLoading: prop_types_1.default.bool,
    children: prop_types_1.default.node,
};
Body.defaultProps = {
    isLoading: false,
    children: null,
};
exports.default = Body;
//# sourceMappingURL=body.jsx.map