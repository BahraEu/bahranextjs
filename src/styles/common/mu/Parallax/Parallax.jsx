"use strict";
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
// core components
const parallaxStyle_1 = __importDefault(require("./parallaxStyle"));
const useStyles = styles_1.makeStyles(parallaxStyle_1.default);
function Parallax(props) {
    let windowScrollTop;
    if (window.innerWidth >= 768) {
        windowScrollTop = window.pageYOffset / 3;
    }
    else {
        windowScrollTop = 0;
    }
    const [transform, setTransform] = react_1.default.useState("translate3d(0," + windowScrollTop + "px,0)");
    react_1.default.useEffect(() => {
        if (window.innerWidth >= 768) {
            window.addEventListener("scroll", resetTransform);
        }
        return function cleanup() {
            if (window.innerWidth >= 768) {
                window.removeEventListener("scroll", resetTransform);
            }
        };
    });
    const resetTransform = () => {
        var windowScrollTop = window.pageYOffset / 3;
        setTransform("translate3d(0," + windowScrollTop + "px,0)");
    };
    const { filter, className, children, style, image, small } = props;
    const classes = useStyles();
    const parallaxClasses = classnames_1.default({
        [classes.parallax]: true,
        [classes.filter]: filter,
        [classes.small]: small,
        [className]: className !== undefined
    });
    return (<div className={parallaxClasses} style={Object.assign(Object.assign({}, style), { backgroundImage: "url(" + image + ")", transform: transform })}>
      {children}
    </div>);
}
exports.default = Parallax;
Parallax.propTypes = {
    className: prop_types_1.default.string,
    filter: prop_types_1.default.bool,
    children: prop_types_1.default.node,
    style: prop_types_1.default.string,
    image: prop_types_1.default.string,
    small: prop_types_1.default.bool
};
//# sourceMappingURL=Parallax.jsx.map