"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const material_kit_react_1 = require("../mu/material-kit-react");
const customInputStyle = {
    disabled: {
        "&:before": {
            borderColor: "transparent !important"
        }
    },
    underline: {
        "&:hover:not($disabled):before,&:before": {
            borderColor: "#D2D2D2 !important",
            borderWidth: "1px !important"
        },
        "&:after": {
            borderColor: material_kit_react_1.primaryColor
        }
    },
    underlineError: {
        "&:after": {
            borderColor: material_kit_react_1.dangerColor
        }
    },
    underlineSuccess: {
        "&:after": {
            borderColor: material_kit_react_1.successColor
        }
    },
    whiteUnderline: {
        "&:hover:not($disabled):before,&:before": {
            borderColor: "#FFFFFF"
        },
        "&:after": {
            borderColor: "#FFFFFF"
        }
    },
    labelRoot: Object.assign(Object.assign({}, material_kit_react_1.defaultFont), { color: "#AAAAAA !important", fontWeight: "400", fontSize: "14px", lineHeight: "1.42857", top: "10px", letterSpacing: "unset", "& + $underline": {
            marginTop: "0px"
        } }),
    labelRootError: {
        color: material_kit_react_1.dangerColor + " !important"
    },
    labelRootSuccess: {
        color: material_kit_react_1.successColor + " !important"
    },
    formControl: {
        margin: "0 0 17px 0",
        paddingTop: "27px",
        position: "relative",
        "& svg,& .fab,& .far,& .fal,& .fas,& .material-icons": {
            color: "#495057"
        }
    },
    input: {
        color: "#495057",
        height: "unset",
        "&,&::placeholder": {
            fontSize: "14px",
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: "400",
            lineHeight: "1.42857",
            opacity: "1"
        },
        "&::placeholder": {
            color: "#AAAAAA"
        }
    },
    whiteInput: {
        "&,&::placeholder": {
            color: "#FFFFFF",
            opacity: "1"
        }
    }
};
exports.default = customInputStyle;
//# sourceMappingURL=customInputStyle.jsx.map