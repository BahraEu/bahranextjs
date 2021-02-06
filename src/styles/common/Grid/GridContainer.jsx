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
exports.StyledContainer = void 0;
const react_1 = __importDefault(require("react"));
// nodejs library to set properties for components
const prop_types_1 = __importDefault(require("prop-types"));
// @material-ui/core components
const styles_1 = require("@material-ui/core/styles");
const Grid_1 = __importDefault(require("@material-ui/core/Grid"));
const theme_1 = __importDefault(require("../../theme"));
const utilty_1 = require("../../../utilty/");
const styles = {
    grid: {
        marginRight: "-15px",
        marginLeft: "-15px",
        width: "auto"
    }
};
const useStyles = styles_1.makeStyles(styles);
function GridContainer(props) {
    const classes = useStyles();
    const { children, className } = props, rest = __rest(props, ["children", "className"]);
    return (<Grid_1.default container {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid_1.default>);
}
exports.default = GridContainer;
exports.StyledContainer = theme_1.default((_a) => {
    var { color } = _a, otherProps = __rest(_a, ["color"]);
    return <GridContainer {...otherProps}/>;
}) `
color: ${props => utilty_1.hexa(props.theme.bg.inset, 0.4)}) !important;
background-position: center ;
position: relative;
display: flex;

background: ${props => utilty_1.hexa(props.theme.bg.inset3, 0.3)}!important;

`;
GridContainer.defaultProps = {
    className: ""
};
GridContainer.propTypes = {
    children: prop_types_1.default.node,
    className: prop_types_1.default.string
};
//# sourceMappingURL=GridContainer.jsx.map