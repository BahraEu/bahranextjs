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
const cardIconStyle_1 = __importDefault(require("./cardStyle/cardIconStyle"));
const useStyles = styles_1.makeStyles(cardIconStyle_1.default);
function CardIcon(props) {
    const classes = useStyles();
    const { className, children, color } = props, rest = __rest(props, ["className", "children", "color"]);
    const cardIconClasses = classnames_1.default({
        [classes.cardIcon]: true,
        [classes[color + "CardHeader"]]: color,
        [className]: className !== undefined
    });
    return (<div className={cardIconClasses} {...rest}>
      {children}
    </div>);
}
exports.default = CardIcon;
CardIcon.propTypes = {
    className: prop_types_1.default.string,
    color: prop_types_1.default.oneOf([
        "warning",
        "success",
        "danger",
        "info",
        "primary",
        "rose"
    ]),
    children: prop_types_1.default.node
};
//# sourceMappingURL=CardIcon.jsx.map