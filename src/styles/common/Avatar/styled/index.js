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
exports.StyledText = exports.StyledImage = exports.StyledAvatar = void 0;
const Typography_1 = require("@styles/Typography");
const theme_1 = __importStar(require("../../../theme"));
const core_1 = require("@material-ui/core");
exports.StyledAvatar = theme_1.default(core_1.Avatar) `
width: 4% !important;
max-width: 160px !important;
transform: translate3d(0, -50%, 0) !important;
box-shadow: 0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2) !important;
border-radius: 50% !important ;
max-width: 100% !important;
color: rgba(0, 0, 0, 0.87) !important;
@media (max-width: ${theme_1.theme.breakpoints[0]}) {
  margin:2% 0% 6% 9% !important;
  height: 60% !important;
  width: 6% !important;

}  
@media (max-width: ${theme_1.theme.breakpoints[1]}) {
  margin:2% 0% 6% 9% !important;
  width: 6% !important;
  height: 60% !important;


}  
@media (max-width: ${theme_1.theme.breakpoints[3]}) {
  margin:2% 0% 0% 12% !important;
  width: 5% !important;
  height: 60% !important;


}

@media (max-width: ${theme_1.theme.breakpoints[5]}) {
  margin:1% 0% 0% 12% !important;
  width: 4% !important;
  height: 60% !important;

} 




@media (max-width: ${theme_1.theme.breakpoints[6]}) {
  margin:1% 0% 6% 12% !important;
  height: 60% !important;


} 


  ${(props) => props.size === 'large' &&
    `
            height: 48;
            width: 48;
        `};
  ${(props) => props.size === 'medium' &&
    `
            height: 32;
            width: 32;
        `};
  ${(props) => props.size === 'small' &&
    `
            height: 24;
            width: 24;
        `};
  ${(props) => props.size === 'x-small' &&
    `
            height: 20;
            width: 20;
        `};



`;
exports.StyledImage = theme_1.default.img `
  border: none;
  border-radius: 24px;
  height: 100%;
  width: 100%;
  imgFluid: {
    maxWidth: 100%;
    height: auto
  },
  imgRounded: {
    borderRadius: 6px !important
  },
  imgRoundedCircle: {
    borderRadius: 50% !important
  },
  imgRaised: {
    boxShadow:
      0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)
  },
  imgGallery: {
    width: 100%;
    marginBottom: 2.142rem
  },
  imgCardTop: {
    width: 100%;
    borderTopLeftRadius: calc(.25rem - 1px);
    borderTopRightRadius: calc(.25rem - 1px)
  },
  imgCardBottom: {
    width: 100%;
    borderBottomLeftRadius: calc(.25rem - 1px);
    borderBottomRightRadius: calc(.25rem - 1px)
  },
  imgCard: {
    width: 100%;
    borderRadius: calc(.25rem - 1px)
  },
  imgCardOverlay: {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1.25rem
  }
`;
exports.StyledText = theme_1.default(Typography_1.H1) `
  color: ${(props) => props.theme.bg.primary};
  text-align: center;
  text-transform: uppercase;

  ${(props) => props.size === 'large' &&
    `
            font-size: 20px
        `};
  ${(props) => props.size === 'medium' &&
    `
            font-size: 16px
        `};
  ${(props) => props.size === 'small' &&
    `
            font-size: 12px
        `};
  ${(props) => props.size === 'x-small' &&
    `
            font-size: 10px
        `};
`;
//# sourceMappingURL=index.js.map