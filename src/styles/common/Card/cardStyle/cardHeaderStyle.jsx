"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const material_dashboard_react_1 = require("../../mu/material-dashboard-react");
const cardHeaderStyle = {
    cardHeader: {
        padding: "0.75rem 1.25rem",
        marginBottom: "0",
        borderBottom: "none",
        background: "transparent",
        zIndex: "3 !important",
        "&$cardHeaderPlain,&$cardHeaderIcon,&$cardHeaderStats,&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
            margin: "0 15px",
            padding: "0",
            position: "relative",
            color: material_dashboard_react_1.whiteColor
        },
        "&:first-child": {
            borderRadius: "calc(.25rem - 1px) calc(.25rem - 1px) 0 0"
        },
        "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
            "&:not($cardHeaderIcon)": {
                borderRadius: "3px",
                marginTop: "-20px",
                padding: "15px"
            }
        },
        "&$cardHeaderStats svg": {
            fontSize: "36px",
            lineHeight: "56px",
            textAlign: "center",
            width: "36px",
            height: "36px",
            margin: "10px 10px 4px"
        },
        "&$cardHeaderStats i,&$cardHeaderStats .material-icons": {
            fontSize: "36px",
            lineHeight: "56px",
            width: "56px",
            height: "56px",
            textAlign: "center",
            overflow: "unset",
            marginBottom: "1px"
        },
        "&$cardHeaderStats$cardHeaderIcon": {
            textAlign: "right"
        }
    },
    cardHeaderPlain: {
        marginLeft: "0px !important",
        marginRight: "0px !important"
    },
    cardHeaderStats: {
        "& $cardHeaderIcon": {
            textAlign: "right"
        },
        "& h1,& h2,& h3,& h4,& h5,& h6": {
            margin: "0 !important"
        }
    },
    cardHeaderIcon: {
        "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
            background: "transparent",
            boxShadow: "none"
        },
        "& i,& .material-icons": {
            width: "33px",
            height: "33px",
            textAlign: "center",
            lineHeight: "33px"
        },
        "& svg": {
            width: "24px",
            height: "24px",
            textAlign: "center",
            lineHeight: "33px",
            margin: "5px 4px 0px"
        }
    },
    warningCardHeader: {
        color: material_dashboard_react_1.whiteColor,
        "&:not($cardHeaderIcon)": Object.assign({}, material_dashboard_react_1.warningCardHeader)
    },
    successCardHeader: {
        color: material_dashboard_react_1.whiteColor,
        "&:not($cardHeaderIcon)": Object.assign({}, material_dashboard_react_1.successCardHeader)
    },
    dangerCardHeader: {
        color: material_dashboard_react_1.whiteColor,
        "&:not($cardHeaderIcon)": Object.assign({}, material_dashboard_react_1.dangerCardHeader)
    },
    infoCardHeader: {
        color: material_dashboard_react_1.whiteColor,
        "&:not($cardHeaderIcon)": Object.assign({}, material_dashboard_react_1.infoCardHeader)
    },
    primaryCardHeader: {
        color: material_dashboard_react_1.whiteColor,
        "&:not($cardHeaderIcon)": Object.assign({}, material_dashboard_react_1.primaryCardHeader)
    },
    roseCardHeader: {
        color: material_dashboard_react_1.whiteColor,
        "&:not($cardHeaderIcon)": Object.assign({}, material_dashboard_react_1.roseCardHeader)
    }
};
exports.default = cardHeaderStyle;
//# sourceMappingURL=cardHeaderStyle.jsx.map