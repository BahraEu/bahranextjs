"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// nodejs library to set properties for components
const prop_types_1 = __importDefault(require("prop-types"));
// @material-ui/core components
const styles_1 = require("@material-ui/core/styles");
const SnackbarContent_1 = __importDefault(require("@material-ui/core/SnackbarContent"));
const IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
const Icon_1 = __importDefault(require("@material-ui/core/Icon"));
// @material-ui/icons
const Close_1 = __importDefault(require("@material-ui/icons/Close"));
// core components
const snackbarContentStyle_1 = __importDefault(require("./snackbarContentStyle"));
const useStyles = styles_1.makeStyles(snackbarContentStyle_1.default);
function SnackbarContent(props) {
    const { message, color, close, icon } = props;
    const classes = useStyles();
    var action = [];
    const closeAlert = () => {
        setAlert(null);
    };
    if (close !== undefined) {
        action = [
            <IconButton_1.default className={classes.iconButton} key="close" aria-label="Close" color="inherit" onClick={closeAlert}>
        <Close_1.default className={classes.close}/>
      </IconButton_1.default>
        ];
    }
    let snackIcon = null;
    switch (typeof icon) {
        case "object":
            snackIcon = <props.icon className={classes.icon}/>;
            break;
        case "string":
            snackIcon = <Icon_1.default className={classes.icon}>{props.icon}</Icon_1.default>;
            break;
        default:
            snackIcon = null;
            break;
    }
    const [alert, setAlert] = react_1.default.useState(<SnackbarContent_1.default message={<div>
          {snackIcon}
          {message}
          {close !== undefined ? action : null}
        </div>} classes={{
        root: classes.root + " " + classes[color],
        message: classes.message + " " + classes.container
    }}/>);
    return alert;
}
exports.default = SnackbarContent;
SnackbarContent.propTypes = {
    message: prop_types_1.default.node.isRequired,
    color: prop_types_1.default.oneOf(["info", "success", "warning", "danger", "primary"]),
    close: prop_types_1.default.bool,
    icon: prop_types_1.default.oneOfType([prop_types_1.default.object, prop_types_1.default.string])
};
//# sourceMappingURL=SnackbarContent.jsx.map