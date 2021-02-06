"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(require("prop-types"));
const input_1 = __importDefault(require("./styled/input"));
const index_1 = require("./styled/index");
const react_1 = __importStar(require("react"));
const Input = (props) => {
    const { label, onChange, value, placeholder, disabled, error, keyboardType, autoFocus, style, icon, iconPosition, } = props;
    const isEnabled = !disabled;
    const [isFocused, setFocusState] = react_1.useState(false);
    return (<div style={style}>
        <index_1.Label>{label}</index_1.Label>
      <div>
        <input_1.default onChangeText={() => onChange} value={value} placeholder={placeholder} editable={isEnabled} selectTextOnFocus={isEnabled} isFocused={isFocused} onBlur={() => setFocusState(false)} onFocus={() => setFocusState(true)} disabled={disabled} keyboardType={keyboardType} autoFocus={autoFocus} hasIcon={!!icon} iconPosition={iconPosition}/>
          <index_1.Icon iconPosition={iconPosition}>{icon}</index_1.Icon>
      </div>
        <index_1.Error>{error}</index_1.Error>
    </div>);
};
Input.propTypes = {
    label: prop_types_1.default.node,
    onChange: prop_types_1.default.func,
    value: prop_types_1.default.string,
    placeholder: prop_types_1.default.string,
    disabled: prop_types_1.default.bool,
    error: prop_types_1.default.node,
    keyboardType: prop_types_1.default.oneOf([
        'default',
        'number-pad',
        'decimal-pad',
        'numeric',
        'email-address',
        'phone-pad',
        'ascii-capable',
        'numbers-and-punctuation',
        'url',
        'name-phone-pad',
        'twitter',
        'web-search',
        'visible-password',
    ]),
    autoFocus: prop_types_1.default.bool,
    style: prop_types_1.default.object,
    icon: prop_types_1.default.node,
    iconPosition: prop_types_1.default.oneOf(['left', 'right']),
};
Input.defaultProps = {
    label: undefined,
    onChange: () => { },
    value: undefined,
    placeholder: undefined,
    disabled: false,
    error: undefined,
    keyboardType: 'default',
    autoFocus: false,
    style: undefined,
    icon: null,
    iconPosition: 'left',
};
exports.default = Input;
//# sourceMappingURL=index.jsx.map