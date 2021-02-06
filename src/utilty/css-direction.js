"use strict";
// RTL Dir is a work in progress
// Follow up this discussion here:
// https://github.com/styled-components/styled-components/issues/2703
// Things may improve with V5:
// https://medium.com/styled-components/announcing-styled-components-v5-beast-mode-389747abd987
// Update: https://github.com/styled-system/styled-system/issues/704
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const CSS_SCHEMA = {
    dirRight: 'right',
    dirLeft: 'left',
    dirBorderRight: 'border-right',
    dirMarginRight: 'margin-right',
    dirMarginLeft: 'margin-left',
    dirPaddingRight: 'padding-right',
    dirPaddingLeft: 'padding-left',
};
const ALLOWED_PROPS = [
    'dirRight',
    'dirLeft',
    'dirBorderRight',
    'dirMarginRight',
    'dirPaddingLeft',
    'dirPaddingRight',
];
const filterProps = props => Object.keys(props)
    .filter(key => ALLOWED_PROPS.includes(key))
    .reduce((obj, key) => {
    // eslint-disable-next-line no-param-reassign
    obj[CSS_SCHEMA[key]] = props[key];
    return obj;
}, {});
const proccess = props => {
    const filtered = filterProps(props);
    return {
        '[dir="ltr"] &': Object.assign({}, filtered),
        '[dir="rtl"] &': {
        // ...rtlCSSJS(filtered),
        },
    };
};
const Direction = styled_components_1.default('div')(proccess);
exports.default = Direction;
//# sourceMappingURL=css-direction.js.map