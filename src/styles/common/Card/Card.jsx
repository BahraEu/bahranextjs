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
exports.Card = void 0;
const react_1 = __importDefault(require("react"));
// nodejs library that concatenates classes
const classnames_1 = __importDefault(require("classnames"));
// nodejs library to set properties for components
const prop_types_1 = __importDefault(require("prop-types"));
// @material-ui/core components
const styles_1 = require("@material-ui/core/styles");
const theme_1 = __importDefault(require("@styles/theme"));
const _utilty_1 = require("@utilty");
// @material-ui/icons
const cardStyle_1 = __importDefault(require("./cardStyle/cardStyle"));
// core components
const useStyles = styles_1.makeStyles(cardStyle_1.default);
function Card(props) {
    const classes = useStyles();
    const { className, children, plain, profile, chart } = props, rest = __rest(props, ["className", "children", "plain", "profile", "chart"]);
    const cardClasses = classnames_1.default({
        [classes.card]: true,
        [classes.cardPlain]: plain,
        [classes.cardProfile]: profile,
        [classes.cardChart]: chart,
        [className]: className !== undefined
    });
    return (<div className={cardClasses} {...rest}>
      {children}
    </div>);
}
exports.Card = Card;
exports.default = theme_1.default((_a) => {
    var { props } = _a, otherProps = __rest(_a, ["props"]);
    return (<Card {...otherProps}/>);
}) `
background: ${props => _utilty_1.hexa(props.theme.bg.inset, 0.9)})!important;
  & .label {
  }

  &.disabled {
    color: black;
    background-color: orange;
    .label {
      background-color: green;
    }
  }
`;
Card.propTypes = {
    className: prop_types_1.default.string,
    plain: prop_types_1.default.bool,
    profile: prop_types_1.default.bool,
    chart: prop_types_1.default.bool,
    children: prop_types_1.default.node
};
//# sourceMappingURL=Card.jsx.map