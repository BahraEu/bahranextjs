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
exports.GridContainer = void 0;
const theme_1 = __importStar(require("../../../../styles/theme"));
const utilty_1 = require("../../../../utilty");
const core_1 = require("@material-ui/core");
exports.GridContainer = theme_1.default(core_1.Grid) `
display: flex;
position: relative;
height:80px ;
width:100% ;
border-radius: 220px !important;
border: 0.4px solid ${props => utilty_1.hexa(props.theme.bg.secondary, 0.1)};
transition: ${theme_1.theme.animations.default};
align-items: center !important ;
align-self: center !important ;
overflow: hidden;
z-index: 3;
&:hover {
    .svg {
        transition: opacity ${theme_1.theme.animations.default},
        filter ${theme_1.theme.animations.default},
        transform ${theme_1.theme.animations.default};
        transform: rotate3d(0.342, -0.94, 0, 22deg) rotateZ(4deg);
        filter: grayscale(0);
        opacity: 1;
    }
}
@media (max-width: ${theme_1.theme.breakpoints[0]}) {
    width: 100% !important ;
    height: 100px  !important ;

    a {
        text-align: left;
    }
}
@media (max-width: ${theme_1.theme.breakpoints[1]}) {
    width: 100% !important ;
    height: 80px  !important ;

    a {
        text-align: left;
    }
}
@media (max-width: ${theme_1.theme.breakpoints[3]}) {
    width:  100% !important ;
    height: 60px !important ;

    a {
        text-align: left;
    }
}
@media (max-width: ${theme_1.theme.breakpoints[5]}) {
    width: 100% !important ;
    height: 40px !important ;

    a {
        text-align: left;
    }
}
`;
//# sourceMappingURL=styles.jsx.map