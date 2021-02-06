"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const material_dashboard_react_1 = require("../../mu/material-dashboard-react");
const CardStyle = {
    card: {
        border: "0",
        marginBottom: "30px",
        marginTop: "30px",
        borderRadius: "6px",
        color: "rgba(" + material_dashboard_react_1.hexToRgb(material_dashboard_react_1.blackColor) + ", 0.87)",
        background: material_dashboard_react_1.whiteColor,
        width: "100%",
        boxShadow: "0 1px 4px 0 rgba(" + material_dashboard_react_1.hexToRgb(material_dashboard_react_1.blackColor) + ", 0.14)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minWidth: "0",
        wordWrap: "break-word",
        fontSize: ".875rem"
    },
    cardPlain: {
        background: "transparent",
        boxShadow: "none"
    },
    cardProfile: {
        marginTop: "30px",
        textAlign: "center"
    },
    cardChart: {
        "& p": {
            marginTop: "0px",
            paddingTop: "0px"
        }
    }
};
exports.default = CardStyle;
//# sourceMappingURL=cardStyle.jsx.map