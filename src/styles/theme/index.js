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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeProvider = exports.keyframes = exports.createGlobalStyle = exports.css = exports.GlobalStyle = void 0;
__exportStar(require("./theme"), exports);
const styledComponents = __importStar(require("styled-components"));
var GlobalStyle_1 = require("./GlobalStyle");
Object.defineProperty(exports, "GlobalStyle", { enumerable: true, get: function () { return GlobalStyle_1.GlobalStyle; } });
const { default: styled, css, createGlobalStyle, keyframes, ThemeProvider, } = styledComponents;
exports.css = css;
exports.createGlobalStyle = createGlobalStyle;
exports.keyframes = keyframes;
exports.ThemeProvider = ThemeProvider;
exports.default = styled;
//# sourceMappingURL=index.js.map