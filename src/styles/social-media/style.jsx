"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialMediaContainer = void 0;
const index_1 = __importDefault(require("../theme/index"));
exports.SocialMediaContainer = index_1.default.div `
    justify-content: space-around;
    display: flex !important;
    flex-direction row !important;
    align-content: center !important;
    flex-wrap: inherit !important;
    align-self: center !important;
    font-size: 65px;
    
    @media (max-width: $breakpoint-mobile) {
        font-size: 55px;

    }
`;
//# sourceMappingURL=style.jsx.map