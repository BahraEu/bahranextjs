"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpinnerContainer = exports.SpinnerOverlay = void 0;
const index_1 = __importDefault(require("../../theme/index"));
exports.SpinnerOverlay = index_1.default.div `
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
exports.SpinnerContainer = index_1.default.div `
  display: inline-flex;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
//# sourceMappingURL=spinner.style.jsx.map