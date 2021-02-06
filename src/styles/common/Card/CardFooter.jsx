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
const cardFooterStyle_1 = __importDefault(require("./cardStyle/cardFooterStyle"));
const useStyles = styles_1.makeStyles(cardFooterStyle_1.default);
function CardFooter(props) {
    const classes = useStyles();
    const { className, children, plain, profile, stats, chart } = props, rest = __rest(props, ["className", "children", "plain", "profile", "stats", "chart"]);
    const cardFooterClasses = classnames_1.default({
        [classes.cardFooter]: true,
        [classes.cardFooterPlain]: plain,
        [classes.cardFooterProfile]: profile,
        [classes.cardFooterStats]: stats,
        [classes.cardFooterChart]: chart,
        [className]: className !== undefined
    });
    return (<div className={cardFooterClasses} {...rest}>
      {children}
    </div>);
}
exports.default = CardFooter;
CardFooter.propTypes = {
    className: prop_types_1.default.string,
    plain: prop_types_1.default.bool,
    profile: prop_types_1.default.bool,
    stats: prop_types_1.default.bool,
    chart: prop_types_1.default.bool,
    children: prop_types_1.default.node
};
//# sourceMappingURL=CardFooter.jsx.map