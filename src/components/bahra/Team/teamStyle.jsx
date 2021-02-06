"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_kit_react_1 = require("@styles/common/mu/material-kit-react");
const imagesStyles_1 = __importDefault(require("@styles/common/mu/imagesStyles"));
const teamStyle = Object.assign(Object.assign({ section: {
        padding: "70px 0",
        textAlign: "center"
    }, title: Object.assign(Object.assign({}, material_kit_react_1.title), { marginBottom: "1rem", marginTop: "30px", minHeight: "32px", textDecoration: "none" }) }, imagesStyles_1.default), { itemGrid: {
        marginLeft: "auto",
        marginRight: "auto"
    }, cardTitle: material_kit_react_1.cardTitle, smallTitle: {
        color: "#6c757d"
    }, description: {
        color: "#999"
    }, justifyCenter: {
        justifyContent: "center !important"
    }, socials: {
        marginTop: "0",
        width: "100%",
        transform: "none",
        left: "0",
        top: "0",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px",
        color: "#999"
    }, margin5: {
        margin: "5px"
    } });
exports.default = teamStyle;
//# sourceMappingURL=teamStyle.jsx.map