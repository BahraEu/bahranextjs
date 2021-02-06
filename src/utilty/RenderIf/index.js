"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(require("prop-types"));
const RenderIf = (props) => {
    const { isTrue, children } = props;
    if (isTrue) {
        return children;
    }
    return null;
};
RenderIf.propTypes = {
    isTrue: prop_types_1.default.bool,
    children: prop_types_1.default.node,
};
RenderIf.defaultProps = {
    isTrue: false,
    children: undefined,
};
exports.default = RenderIf;
//# sourceMappingURL=index.js.map