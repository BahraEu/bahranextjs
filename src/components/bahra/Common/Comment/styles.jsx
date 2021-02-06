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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const theme_1 = __importStar(require("../../../../styles/theme"));
const utilty_1 = require("../../../../utilty");
const core_1 = require("@material-ui/core");
exports.Container = theme_1.default(core_1.Grid) `
background: ${props => utilty_1.hexa(props.theme.bg.inset, 0.6)};
display: flex;
position: relative;
padding: 24px;
border-radius: 8px;
transition: ${theme_1.theme.animations.default};
align-items: flex-start;
overflow: hidden;
z-index: 3;
margin-bottom:2rem;

&:hover {
    video {
        transition: opacity ${theme_1.theme.animations.default},
            filter ${theme_1.theme.animations.default},
            transform ${theme_1.theme.animations.default};
        transform: rotate3d(0.342, -0.94, 0, 22deg) rotateZ(4deg);
        filter: grayscale(0);
        opacity: 1;
    }
}
`;
//# sourceMappingURL=styles.jsx.map