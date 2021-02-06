"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const material_dashboard_react_1 = require("../../../../styles/common/mu/material-dashboard-react");
const dashboardStyle = {
    successText: {
        color: material_dashboard_react_1.successColor[0]
    },
    upArrowCardCategory: {
        width: "16px",
        height: "16px"
    },
    stats: {
        color: material_dashboard_react_1.grayColor[0],
        display: "inline-flex",
        fontSize: "12px",
        lineHeight: "22px",
        "& svg": {
            top: "4px",
            width: "16px",
            height: "16px",
            position: "relative",
            marginRight: "3px",
            marginLeft: "3px"
        },
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            top: "4px",
            fontSize: "16px",
            position: "relative",
            marginRight: "3px",
            marginLeft: "3px"
        }
    },
    cardCategory: {
        color: material_dashboard_react_1.grayColor[0],
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        paddingTop: "10px",
        marginBottom: "0"
    },
    cardCategoryWhite: {
        color: "rgba(" + material_dashboard_react_1.hexToRgb(material_dashboard_react_1.whiteColor) + ",.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitle: {
        color: material_dashboard_react_1.grayColor[2],
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: material_dashboard_react_1.grayColor[1],
            fontWeight: "400",
            lineHeight: "1"
        }
    },
    cardTitleWhite: {
        color: material_dashboard_react_1.whiteColor,
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: material_dashboard_react_1.grayColor[1],
            fontWeight: "400",
            lineHeight: "1"
        }
    }
};
exports.default = dashboardStyle;
//# sourceMappingURL=dashboardStyle.jsx.map