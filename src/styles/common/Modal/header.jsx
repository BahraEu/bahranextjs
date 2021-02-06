"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const styled_1 = require("./styled");
const Header = ({ title }) => {
    if (typeof title === 'string') {
        return <styled_1.Title>{title}</styled_1.Title>;
    }
    return title;
};
Header.propTypes = {
    title: prop_types_1.default.node,
};
Header.defaultProps = {
    title: null,
};
exports.default = Header;
//# sourceMappingURL=header.jsx.map