"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const material_kit_react_1 = require("../material-kit-react");
const snackbarContentStyle = {
    root: Object.assign(Object.assign({}, material_kit_react_1.defaultFont), { position: "relative", padding: "20px 15px", lineHeight: "20px", marginBottom: "20px", fontSize: "14px", backgroundColor: "white", color: "#555555", borderRadius: "0px", maxWidth: "100%", minWidth: "auto", boxShadow: "0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2)" }),
    info: Object.assign({ backgroundColor: "#00d3ee", color: "#ffffff" }, material_kit_react_1.infoBoxShadow),
    success: Object.assign({ backgroundColor: "#5cb860", color: "#ffffff" }, material_kit_react_1.successBoxShadow),
    warning: Object.assign({ backgroundColor: "#ffa21a", color: "#ffffff" }, material_kit_react_1.warningBoxShadow),
    danger: Object.assign({ backgroundColor: "#f55a4e", color: "#ffffff" }, material_kit_react_1.dangerBoxShadow),
    primary: Object.assign({ backgroundColor: "#af2cc5", color: "#ffffff" }, material_kit_react_1.primaryBoxShadow),
    message: {
        padding: "0",
        display: "block",
        maxWidth: "89%",
        "&,& *": {
            letterSpacing: "normal"
        }
    },
    close: {
        width: "14px",
        height: "14px"
    },
    iconButton: {
        width: "24px",
        height: "24px",
        float: "right",
        fontSize: "1.5rem",
        fontWeight: "500",
        lineHeight: "1",
        position: "absolute",
        right: "-4px",
        top: "0",
        padding: "0"
    },
    icon: {
        display: "block",
        float: "left",
        marginRight: "1.071rem"
    },
    container: Object.assign(Object.assign({}, material_kit_react_1.container), { position: "relative" })
};
exports.default = snackbarContentStyle;
//# sourceMappingURL=snackbarContentStyle.jsx.map