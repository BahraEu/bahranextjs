"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpinnerContainer = exports.SpinnerOverlay = exports.SpinnerPrecent = exports.Spinner = void 0;
const core_1 = require("@material-ui/core");
const utilty_1 = require("../../utilty");
const index_1 = __importDefault(require("../theme/index"));
const index_2 = require("../Typography/index");
exports.Spinner = index_1.default(core_1.CircularProgress) `
height:4.6em !important;
  width: 4.6em !important;
  display: flex;
  justify-content: center;
  color:   #3185FC !important;
  align-items: center;`;
exports.SpinnerPrecent = index_1.default(index_2.H2) `
  height:2em !important;
  width: 2em !important;
  position: absolute;
  margin-left: 0;
  display: inline-flex;
  justify-content: center;
  color:${utilty_1.hexa('#9094A6', 0.9)}; !important;
  align-items: center;`;
exports.SpinnerOverlay = index_1.default.div `
  height:4em;
  width: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
`;
exports.SpinnerContainer = index_1.default(core_1.Box) `
  display: inline-flex;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: scale(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: scale(360deg);
    }
  }
`;
//# sourceMappingURL=spinner.style.jsx.map