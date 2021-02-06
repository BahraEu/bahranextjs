"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const styled_1 = require("./styled");
const HeaderTitle = (props) => {
    const { children } = props;
    if (typeof children === 'string' || typeof children === 'number') {
        return <styled_1.TextTitle data-numberOfLines={1}>{children}</styled_1.TextTitle>;
    }
    return children;
};
HeaderTitle.propTypes = {
    children: prop_types_1.default.node,
};
HeaderTitle.defaultProps = {
    children: undefined,
};
exports.default = HeaderTitle;
//# sourceMappingURL=title.jsx.map