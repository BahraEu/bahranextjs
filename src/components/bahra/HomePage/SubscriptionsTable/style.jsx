"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionTable = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.SubscriptionTable = styled_components_1.default.div `
display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 40px;
    min-height: 250px;
    table {
        border-collapse: collapse;
        min-width: 320px;
        max-width: 600px;
        width: 100%;
    }
    
    th {
        text-align: left;
        padding: 8px;
        background-color: $secondary-color;
        color: white;
    }
    td {
        text-align: left;
        padding: 8px;
    } 
    tr:nth-child(even) {
        background-color: #f2f2f2;
    }

`;
//# sourceMappingURL=style.jsx.map