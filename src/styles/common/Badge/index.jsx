"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const styled_1 = require("./styled");
const BadgeContent_1 = __importDefault(require("./BadgeContent"));
/**
 * Badges are labels which hold small amounts of information.
 */
const Badge = (props) => {
    const { label, variant, style } = props;
    return (<styled_1.StyledBadgeContainer style={style}>
      <styled_1.StyledBadge variant={variant}>
        <BadgeContent_1.default variant={variant}>{label}</BadgeContent_1.default>
      </styled_1.StyledBadge>
    </styled_1.StyledBadgeContainer>);
};
Badge.propTypes = {
    /** The text to be displayed inside the badge. */
    label: prop_types_1.default.node,
    /** The variant changes the appearance of the badge.
     * Accepted variants include default, lightest, brand and outline-brand.
     * This value defaults to default. */
    variant: prop_types_1.default.oneOf(['default', 'lightest', 'outline-brand', 'brand']),
    /** An object with custom style applied to the outer element. */
    style: prop_types_1.default.object,
};
Badge.defaultProps = {
    label: null,
    variant: 'default',
    style: undefined,
};
exports.default = Badge;
//# sourceMappingURL=index.jsx.map