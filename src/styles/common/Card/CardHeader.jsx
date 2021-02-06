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
const cardHeaderStyle_1 = __importDefault(require("./cardStyle/cardHeaderStyle"));
const useStyles = styles_1.makeStyles(cardHeaderStyle_1.default);
function CardHeader(props) {
    const classes = useStyles();
    const { className, children, color, plain, stats, icon } = props, rest = __rest(props, ["className", "children", "color", "plain", "stats", "icon"]);
    const cardHeaderClasses = classnames_1.default({
        [classes.cardHeader]: true,
        [classes[color + "CardHeader"]]: color,
        [classes.cardHeaderPlain]: plain,
        [classes.cardHeaderStats]: stats,
        [classes.cardHeaderIcon]: icon,
        [className]: className !== undefined
    });
    return (<div className={cardHeaderClasses} {...rest}>
      {children}
    </div>);
}
exports.default = CardHeader;
CardHeader.propTypes = {
    className: prop_types_1.default.string,
    color: prop_types_1.default.oneOf([
        "warning",
        "success",
        "danger",
        "info",
        "primary",
        "rose"
    ]),
    plain: prop_types_1.default.bool,
    stats: prop_types_1.default.bool,
    icon: prop_types_1.default.bool,
    children: prop_types_1.default.node
};
//# sourceMappingURL=CardHeader.jsx.map