"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const styled_1 = require("./styled");
/**
 * Here we handle the content of the badges.
 */
const BadgetContent = (props) => {
    const { variant, children } = props;
    if (typeof children === 'string' || typeof children === 'number') {
        return <styled_1.StyledTextBadge variant={variant}>{children}</styled_1.StyledTextBadge>;
    }
    return children;
};
BadgetContent.propTypes = {
    /* The text or component to be displayed on the badge. */
    children: prop_types_1.default.node,
    /** The variant changes the appearance of the badge.
     * Accepted variants include default, lightest, brand and outline-brand.
     * This value defaults to default. */
    variant: prop_types_1.default.oneOf(['default', 'lightest', 'outline-brand', 'brand']),
};
BadgetContent.defaultProps = {
    children: null,
    variant: 'default',
};
exports.default = BadgetContent;
//# sourceMappingURL=BadgeContent.jsx.map