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
exports.SectionHeading = exports.InnerPageContainer = exports.PreviewContentGrid = exports.ContentGrid = exports.ContentContainer = exports.PageContainer = void 0;
const theme_1 = __importStar(require("@styles/theme"));
exports.PageContainer = theme_1.default.div `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  max-width: 100%;
`;
exports.ContentContainer = theme_1.default.div `
  width: 100%;
  max-width: 600px;
`;
exports.ContentGrid = theme_1.default.div `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${theme_1.theme.space[3]};
  grid-auto-rows: auto;
  width: 100%;
  max-width: ${theme_1.theme.breakpoints[0]};
  margin-top: ${theme_1.theme.space[5]};

  a {
    overflow: hidden;
    border-radius: 8px;
    transition: box-shadow ${theme_1.theme.animations.default};
  }

  a:hover {
    box-shadow: ${theme_1.theme.shadows.largeHover};
    transition: box-shadow ${theme_1.theme.animations.hover};
  }

  @media (max-width: ${theme_1.theme.breakpoints[1]}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme_1.theme.breakpoints[4]}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
exports.PreviewContentGrid = theme_1.default(exports.ContentGrid) `
  a {
    overflow: hidden;
  }

  a:last-of-type {
    display: none;
  }

  @media (max-width: ${theme_1.theme.breakpoints[1]}) {
    grid-template-columns: repeat(2, 1fr);
    a:last-of-type {
      display: inline-block;
    }
  }

  @media (max-width: ${theme_1.theme.breakpoints[4]}) {
    grid-template-columns: repeat(1, 1fr);

    a:first-of-type {
      grid-column: 1;
    }
  }
`;
exports.InnerPageContainer = theme_1.default.main `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  flex: 1 0 auto;
  width: 100%;
  padding: 0 ${theme_1.theme.space[3]};
  padding-top: ${theme_1.theme.space[7]};
  padding-bottom: ${theme_1.theme.space[9]};

  @media (max-width: ${theme_1.theme.breakpoints[4]}) {
    max-width: 100%;
  }
`;
exports.SectionHeading = theme_1.default.div `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: ${theme_1.theme.space[9]};
  width: 100%;
  max-width: ${theme_1.theme.breakpoints[3]};

  @media (max-width: ${theme_1.theme.breakpoints[4]}) {
    max-width: 100%;
    margin-top: ${theme_1.theme.space[8]};
  }
`;
//# sourceMappingURL=pageStyle.jsx.map