"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const styled_1 = require("./styled");
const ButtonContent = (props) => {
    const { variant, children, disabled } = props;
    if (typeof children === 'string' || typeof children === 'number') {
        return (<styled_1.StyledText variant={variant} disabled={disabled} numberOfLines={1}>
        {children}
      </styled_1.StyledText>);
    }
    return children;
};
ButtonContent.propTypes = {
    children: prop_types_1.default.node,
    variant: prop_types_1.default.oneOf([
        'base',
        'neutral',
        'brand',
        'outline-brand',
        'destructive',
        'success',
    ]),
    disabled: prop_types_1.default.bool,
};
ButtonContent.defaultProps = {
    children: null,
    variant: 'base',
    disabled: false,
};
exports.default = ButtonContent;
//# sourceMappingURL=buttonContent.jsx.map