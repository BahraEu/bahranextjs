"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const styled_1 = require("./styled");
const Avatar = (props) => {
    const { src, initials, size, style } = props;
    return (<styled_1.StyledAvatar src={src} size={size} style={style}>
    
        <styled_1.StyledImage src={src}/>
        <styled_1.StyledText size={size}>{initials}</styled_1.StyledText>
    </styled_1.StyledAvatar>);
};
Avatar.propTypes = {
    /** The URL for the image.
     * It take precedence over the initials and icon. */
    src: prop_types_1.default.string,
    /** If the record name contains two words, like first and last name,
     * use the first capitalized letter of each. For records that only have a single word name,
     * use the first two letters of that word using one capital and one lower case letter. */
    initials: prop_types_1.default.string,
    /** The fallback icon to show when src and initials are not passed. */
    icon: prop_types_1.default.node,
    /** The size of the avatar. Valid values are x-small, small, medium, and large.
     * It take precedence over the icon.
     * This value defaults to medium. */
    size: prop_types_1.default.oneOf(['large', 'medium', 'small', 'x-small']),
    /** An object with custom style applied to the outer element. */
    style: prop_types_1.default.object,
};
Avatar.defaultProps = {
    icon: null,
    initials: undefined,
    src: undefined,
    size: 'medium',
    style: undefined,
};
exports.default = Avatar;
//# sourceMappingURL=index.jsx.map