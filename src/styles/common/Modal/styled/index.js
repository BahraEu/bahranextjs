"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloseButton = exports.StyledCloseIcon = exports.Content = exports.Container = exports.Title = void 0;
const core_1 = require("@material-ui/core");
const native_1 = __importDefault(require("styled-components/native"));
exports.Title = native_1.default.Text `
    font-size: 18;
    color:${(props) => props.theme.bg.primary}
    margin: 24px 40px;
    text-align: center;
`;
exports.Container = native_1.default.SafeAreaView `
  flex: 1;
`;
exports.Content = native_1.default.View `
  flex: 1;
`;
exports.StyledCloseIcon = native_1.default(core_1.Icon) `
    color:${(props) => props.theme.bg.primary}
    height: 16;
    width: 16;
`;
exports.CloseButton = native_1.default(core_1.Icon) `
  position: absolute;
  top: 12;
  right: 12;
`;
//# sourceMappingURL=index.js.map