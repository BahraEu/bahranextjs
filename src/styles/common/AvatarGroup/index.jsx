"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const styled_1 = require("./styled");
const Avatars_1 = __importDefault(require("./Avatars"));
const Counter_1 = __importDefault(require("./Counter"));
/**
 * An AvatarGroup is an element that communicates to the user
 *  that there are many entities associated to an item.
 */
const AvatarGroup = ({ size, avatars = [], maxAvatars, style, }) => {
    return (<styled_1.StyledContainer style={style}>
                <Counter_1.default size={size} avatars={avatars}/>
            <Avatars_1.default size={size} maxAvatars={maxAvatars} avatars={avatars}/>
        </styled_1.StyledContainer>);
};
AvatarGroup.propTypes = {
    /** The size of the AvatarGroup. Valid values are x-small, small, medium, and large.
     * This value defaults to medium. */
    size: prop_types_1.default.oneOf(['large', 'medium', 'small', 'x-small']),
    /** An array with the Avatars data. */
    avatars: prop_types_1.default.arrayOf(prop_types_1.default.shape({
        src: prop_types_1.default.string,
        initials: prop_types_1.default.string,
        icon: prop_types_1.default.node,
    }).isRequired),
    /** Specify how many Avatars will render. */
    maxAvatars: prop_types_1.default.number,
    /** This shows a counter with the total value of the number of avatars.
     * It is independent of the number of avatars displayed in the component. */
    showCounter: prop_types_1.default.bool,
    /** An object with custom style applied to the outer element. */
    style: prop_types_1.default.object,
};
AvatarGroup.defaultProps = {
    size: 'medium',
    avatars: [],
    maxAvatars: 3,
    showCounter: false,
    style: undefined,
};
exports.default = AvatarGroup;
//# sourceMappingURL=index.jsx.map