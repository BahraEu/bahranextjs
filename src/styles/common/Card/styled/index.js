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
exports.Footer = exports.TextTitle = exports.Icon = exports.TitleContent = exports.HeaderContainer = exports.Container = void 0;
const index_1 = __importStar(require("../../../theme/index"));
const index_2 = require("../../../Typography/index");
exports.Container = index_1.default.div `
  position: relative;
  background-color:   color: ${props => props.theme.text.secondary};
  border: 1px solid   color: ${props => props.theme.text.secondary};
  border-radius:${index_1.theme.border.default} ;
  box-shadow: ${index_1.theme.shadows.active};
  overflow: hidden;
`;
exports.HeaderContainer = index_1.default.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0;
`;
exports.TitleContent = index_1.default.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
exports.Icon = index_1.default.div `
  flex-shrink: 0;
`;
exports.TextTitle = index_1.default(index_2.H1) `
  font-weight: 300;
 color: ${props => props.theme.text.secondary};
`;
exports.Footer = index_1.default.div `
  border-style: solid;
  border-top-width: 1px;
  border-top-color:  ${props => props.theme.text.secondary};
`;
//# sourceMappingURL=index.js.map