"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const styled_1 = require("./styled");
const __1 = require("..");
const Avatars = props => {
    const { avatars = [], maxAvatars = 3, size } = props;
    return (<styled_1.StyledAvatarContainer>
            {avatars.slice(0, maxAvatars).map((avatar, idx) => {
        const { src, initials, icon } = avatar;
        const key = `avatar-${idx}`;
        const zIndex = maxAvatars - idx;
        const isFirstChild = idx === 0;
        return (<styled_1.StyledAvatar key={key} zIndex={zIndex} firstChild={isFirstChild} size={size}>
                        <__1.Avatar src={src} initials={initials} size={size} icon={icon}/>
                    </styled_1.StyledAvatar>);
    })}
        </styled_1.StyledAvatarContainer>);
};
Avatars.propTypes = {
    size: prop_types_1.default.oneOf(['x-small', 'small', 'medium', 'large']),
    avatars: prop_types_1.default.array,
    maxAvatars: prop_types_1.default.number,
};
Avatars.defaultProps = {
    size: 'medium',
    avatars: [],
    maxAvatars: 3,
};
exports.default = Avatars;
//# sourceMappingURL=Avatars.jsx.map