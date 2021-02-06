"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// nodejs library that concatenates classes
const classnames_1 = __importDefault(require("classnames"));
// nodejs library to set properties for components
const prop_types_1 = __importDefault(require("prop-types"));
// @material-ui/core components
const styles_1 = require("@material-ui/core/styles");
// @material-ui/icons
// core components
const cardAvatarStyle_1 = __importDefault(require("./cardStyle/cardAvatarStyle"));
const useStyles = styles_1.makeStyles(cardAvatarStyle_1.default);
function CardAvatar(props) {
    const classes = useStyles();
    const { children, className, plain, profile } = props, rest = __rest(props, ["children", "className", "plain", "profile"]);
    const cardAvatarClasses = classnames_1.default({
        [classes.cardAvatar]: true,
        [classes.cardAvatarProfile]: profile,
        [classes.cardAvatarPlain]: plain,
        [className]: className !== undefined
    });
    return (<div className={cardAvatarClasses} {...rest}>
      {children}
    </div>);
}
exports.default = CardAvatar;
CardAvatar.propTypes = {
    children: prop_types_1.default.node.isRequired,
    className: prop_types_1.default.string,
    profile: prop_types_1.default.bool,
    plain: prop_types_1.default.bool
};
//# sourceMappingURL=CardAvatar.jsx.map