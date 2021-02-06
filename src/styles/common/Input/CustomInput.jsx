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
const FormControl_1 = __importDefault(require("@material-ui/core/FormControl"));
const InputLabel_1 = __importDefault(require("@material-ui/core/InputLabel"));
const Input_1 = __importDefault(require("@material-ui/core/Input"));
const customInputStyle_1 = __importDefault(require("./customInputStyle"));
const useStyles = styles_1.makeStyles(customInputStyle_1.default);
function CustomInput(props) {
    const classes = useStyles();
    const { formControlProps, labelText, id, labelProps, inputProps, error, white, inputRootCustomClasses, success } = props;
    const labelClasses = classnames_1.default({
        [" " + classes.labelRootError]: error,
        [" " + classes.labelRootSuccess]: success && !error
    });
    const underlineClasses = classnames_1.default({
        [classes.underlineError]: error,
        [classes.underlineSuccess]: success && !error,
        [classes.underline]: true,
        [classes.whiteUnderline]: white
    });
    const marginTop = classnames_1.default({
        [inputRootCustomClasses]: inputRootCustomClasses !== undefined
    });
    const inputClasses = classnames_1.default({
        [classes.input]: true,
        [classes.whiteInput]: white
    });
    var formControlClasses;
    if (formControlProps !== undefined) {
        formControlClasses = classnames_1.default(formControlProps.className, classes.formControl);
    }
    else {
        formControlClasses = classes.formControl;
    }
    return (<FormControl_1.default {...formControlProps} className={formControlClasses}>
      {labelText !== undefined ? (<InputLabel_1.default className={classes.labelRoot + " " + labelClasses} htmlFor={id} {...labelProps}>
          {labelText}
        </InputLabel_1.default>) : null}
      <Input_1.default classes={{
        input: inputClasses,
        root: marginTop,
        disabled: classes.disabled,
        underline: underlineClasses
    }} id={id} {...inputProps}/>
    </FormControl_1.default>);
}
exports.default = CustomInput;
CustomInput.propTypes = {
    labelText: prop_types_1.default.node,
    labelProps: prop_types_1.default.object,
    id: prop_types_1.default.string,
    inputProps: prop_types_1.default.object,
    formControlProps: prop_types_1.default.object,
    inputRootCustomClasses: prop_types_1.default.string,
    error: prop_types_1.default.bool,
    success: prop_types_1.default.bool,
    white: prop_types_1.default.bool
};
//# sourceMappingURL=CustomInput.jsx.map