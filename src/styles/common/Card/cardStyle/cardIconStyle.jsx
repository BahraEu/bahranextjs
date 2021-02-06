"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const material_dashboard_react_1 = require("../../mu/material-dashboard-react");
const cardIconStyle = {
    cardIcon: {
        "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
            borderRadius: "3px",
            backgroundColor: material_dashboard_react_1.grayColor[0],
            padding: "15px",
            marginTop: "-20px",
            marginRight: "15px",
            float: "left"
        }
    },
    warningCardHeader: material_dashboard_react_1.warningCardHeader,
    successCardHeader: material_dashboard_react_1.successCardHeader,
    dangerCardHeader: material_dashboard_react_1.dangerCardHeader,
    infoCardHeader: material_dashboard_react_1.infoCardHeader,
    primaryCardHeader: material_dashboard_react_1.primaryCardHeader,
    roseCardHeader: material_dashboard_react_1.roseCardHeader
};
exports.default = cardIconStyle;
//# sourceMappingURL=cardIconStyle.jsx.map