"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_dashboard_react_1 = require("../material-dashboard-react");
const tooltipsStyle_1 = __importDefault(require("./tooltipsStyle"));
const customCheckboxRadioSwitch_1 = __importDefault(require("./customCheckboxRadioSwitch"));
const tasksStyle = Object.assign(Object.assign(Object.assign({}, tooltipsStyle_1.default), customCheckboxRadioSwitch_1.default), { table: {
        marginBottom: "0",
        overflow: "visible"
    }, tableRow: {
        position: "relative",
        borderBottom: "1px solid " + material_dashboard_react_1.grayColor[5]
    }, tableActions: {
        display: "flex",
        border: "none",
        padding: "12px 8px !important",
        verticalAlign: "middle"
    }, tableCell: Object.assign(Object.assign({}, material_dashboard_react_1.defaultFont), { padding: "8px", verticalAlign: "middle", border: "none", lineHeight: "1.42857143", fontSize: "14px" }), tableCellRTL: {
        textAlign: "right"
    }, tableActionButton: {
        width: "27px",
        height: "27px",
        padding: "0"
    }, tableActionButtonIcon: {
        width: "17px",
        height: "17px"
    }, edit: {
        backgroundColor: "transparent",
        color: material_dashboard_react_1.primaryColor[0],
        boxShadow: "none"
    }, close: {
        backgroundColor: "transparent",
        color: material_dashboard_react_1.dangerColor[0],
        boxShadow: "none"
    } });
exports.default = tasksStyle;
//# sourceMappingURL=tasksStyle.jsx.map