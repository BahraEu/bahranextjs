"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const button_1 = __importDefault(require("./styled/button"));
const index_1 = require("./styled/index");
const buttonContent_1 = __importDefault(require("./buttonContent"));
const BahraButton = (props) => {
    const { onClick, label, disabled, isLoading, variant, style, icon, iconPosition, } = props;
    const isDisabled = disabled || isLoading;
    const hasLeftIcon = !!(icon && iconPosition === 'left');
    const hasRightIcon = !!(icon && iconPosition === 'right');
    return (<button_1.default style={style} variant={variant} onClick={onClick} disabled={isDisabled} hasLeftIcon={hasLeftIcon} hasRightIcon={hasRightIcon}>
      <index_1.StyledIcon iconPosition={iconPosition}>{icon}</index_1.StyledIcon>
      <buttonContent_1.default variant={variant} disabled={isDisabled}>
        {label}
      </buttonContent_1.default>
        <index_1.StyledIcon iconPosition={iconPosition}>{icon}</index_1.StyledIcon>
    </button_1.default>);
};
BahraButton.propTypes = {
    onClick: prop_types_1.default.func,
    label: prop_types_1.default.node,
    icon: prop_types_1.default.node,
    iconPosition: prop_types_1.default.oneOf(['left', 'right']),
    disabled: prop_types_1.default.bool,
    isLoading: prop_types_1.default.bool,
    variant: prop_types_1.default.oneOf([
        'base',
        'neutral',
        'brand',
        'outline-brand',
        'destructive',
        'success',
    ]),
    style: prop_types_1.default.object,
};
BahraButton.defaultProps = {
    onClick: () => { },
    label: undefined,
    icon: undefined,
    iconPosition: 'left',
    disabled: false,
    isLoading: false,
    variant: 'neutral',
    style: undefined,
};
exports.default = BahraButton;
//# sourceMappingURL=index.jsx.map