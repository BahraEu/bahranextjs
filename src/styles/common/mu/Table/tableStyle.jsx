"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const material_dashboard_react_1 = require("../material-dashboard-react");
const tableStyle = theme => ({
    warningTableHeader: {
        color: material_dashboard_react_1.warningColor[0]
    },
    primaryTableHeader: {
        color: material_dashboard_react_1.primaryColor[0]
    },
    dangerTableHeader: {
        color: material_dashboard_react_1.dangerColor[0]
    },
    successTableHeader: {
        color: material_dashboard_react_1.successColor[0]
    },
    infoTableHeader: {
        color: material_dashboard_react_1.infoColor[0]
    },
    roseTableHeader: {
        color: material_dashboard_react_1.roseColor[0]
    },
    grayTableHeader: {
        color: material_dashboard_react_1.grayColor[0]
    },
    table: {
        marginBottom: "0",
        width: "100%",
        maxWidth: "100%",
        backgroundColor: "transparent",
        borderSpacing: "0",
        borderCollapse: "collapse"
    },
    tableHeadCell: Object.assign(Object.assign({ color: "inherit" }, material_dashboard_react_1.defaultFont), { "&, &$tableCell": {
            fontSize: "1em"
        } }),
    tableCell: Object.assign(Object.assign({}, material_dashboard_react_1.defaultFont), { lineHeight: "1.42857143", padding: "12px 8px", verticalAlign: "middle", fontSize: "0.8125rem" }),
    tableResponsive: {
        width: "100%",
        marginTop: theme.spacing(3),
        overflowX: "auto"
    },
    tableHeadRow: {
        height: "56px",
        color: "inherit",
        display: "table-row",
        outline: "none",
        verticalAlign: "middle"
    },
    tableBodyRow: {
        height: "48px",
        color: "inherit",
        display: "table-row",
        outline: "none",
        verticalAlign: "middle"
    }
});
exports.default = tableStyle;
//# sourceMappingURL=tableStyle.jsx.map