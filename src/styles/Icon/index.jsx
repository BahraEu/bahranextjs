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
exports.InlineSvg = exports.Icon = void 0;
const React = __importStar(require("react"));
const icons_1 = require("./icons");
const styled_components_1 = __importDefault(require("styled-components"));
const Icon = ({ name, size = 36, fill, style, onClick, }) => {
    const { viewBox, d } = icons_1.icons[name];
    return (<exports.InlineSvg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox={viewBox} fill={fill} style={style} onClick={onClick}>
            <path d={d}/>
        </exports.InlineSvg>);
};
exports.Icon = Icon;
exports.InlineSvg = styled_components_1.default.svg `
    display: flex;
    flex-direction: colomn;
    align-content: center;
`;
//# sourceMappingURL=index.jsx.map