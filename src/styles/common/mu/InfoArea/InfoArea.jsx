"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// nodejs library to set properties for components
const prop_types_1 = __importDefault(require("prop-types"));
// nodejs library that concatenates classes
const classnames_1 = __importDefault(require("classnames"));
// @material-ui/core components
const styles_1 = require("@material-ui/core/styles");
const infoStyle_1 = __importDefault(require("./infoStyle"));
const useStyles = styles_1.makeStyles(infoStyle_1.default);
function InfoArea(props) {
    const classes = useStyles();
    const { title, description, iconColor, vertical } = props;
    const iconWrapper = classnames_1.default({
        [classes.iconWrapper]: true,
        [classes[iconColor]]: true,
        [classes.iconWrapperVertical]: vertical
    });
    const iconClasses = classnames_1.default({
        [classes.icon]: true,
        [classes.iconVertical]: vertical
    });
    return (<div className={classes.infoArea}>
      <div className={iconWrapper}>
        <props.icon className={iconClasses}/>
      </div>
      <div className={classes.descriptionWrapper}>
        <h4 className={classes.title}>{title}</h4>
        <p className={classes.description}>{description}</p>
      </div>
    </div>);
}
exports.default = InfoArea;
InfoArea.defaultProps = {
    iconColor: "gray"
};
InfoArea.propTypes = {
    icon: prop_types_1.default.object.isRequired,
    title: prop_types_1.default.string.isRequired,
    description: prop_types_1.default.string.isRequired,
    iconColor: prop_types_1.default.oneOf([
        "primary",
        "warning",
        "danger",
        "success",
        "info",
        "rose",
        "gray"
    ]),
    vertical: prop_types_1.default.bool
};
//# sourceMappingURL=InfoArea.jsx.map