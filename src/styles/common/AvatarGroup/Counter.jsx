"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const Avatar_1 = __importDefault(require("../Avatar"));
const styled_1 = require("./styled");
const AbbreviateNumber_1 = __importDefault(require("./helpers/AbbreviateNumber"));
const Counter = ({ avatars = [], size = 'medium' }) => {
    const total = AbbreviateNumber_1.default(avatars.length);
    return (<styled_1.StyledCounter size={size}>
            <Avatar_1.default size={size} initials={total}/>
        </styled_1.StyledCounter>);
};
Counter.propTypes = {
    size: prop_types_1.default.oneOf(['large', 'medium', 'small', 'x-small']),
    avatars: prop_types_1.default.array,
};
Counter.defaultProps = {
    size: 'medium',
    avatars: [],
};
exports.default = Counter;
//# sourceMappingURL=Counter.jsx.map