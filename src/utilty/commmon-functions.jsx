"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderIf = exports.wpdDecodeHtml = void 0;
/**
 * Converts the html entities to html.
 *
 * @param {string} html HTML with entities.
 *
 * @return {string} html with converted html entities.
 */
const prop_types_1 = __importDefault(require("prop-types"));
const wpdDecodeHtml = (html) => {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
};
exports.wpdDecodeHtml = wpdDecodeHtml;
const RenderIf = (props) => {
    const { isTrue, children } = props;
    if (isTrue) {
        return children;
    }
    return null;
};
exports.RenderIf = RenderIf;
exports.RenderIf.propTypes = {
    isTrue: prop_types_1.default.bool,
    children: prop_types_1.default.node,
};
exports.RenderIf.defaultProps = {
    isTrue: false,
    children: undefined,
};
//# sourceMappingURL=commmon-functions.jsx.map