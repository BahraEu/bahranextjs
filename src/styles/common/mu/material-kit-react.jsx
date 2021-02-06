"use strict";
/*!

 =========================================================
 * Material Kit React - v1.9.0 based on Material Kit - v2.0.2
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-kit-react
 * Copyright 2020 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardSubtitle = exports.cardLink = exports.cardTitle = exports.title = exports.defaultBoxShadow = exports.cardHeader = exports.cardActions = exports.roseCardHeader = exports.primaryCardHeader = exports.infoCardHeader = exports.dangerCardHeader = exports.successCardHeader = exports.warningCardHeader = exports.roseBoxShadow = exports.dangerBoxShadow = exports.warningBoxShadow = exports.successBoxShadow = exports.infoBoxShadow = exports.primaryBoxShadow = exports.grayColor = exports.roseColor = exports.infoColor = exports.successColor = exports.dangerColor = exports.warningColor = exports.primaryColor = exports.defaultFont = exports.card = exports.boxShadow = exports.containerFluid = exports.container = exports.transition = exports.drawerWidth = void 0;
// ##############################
// // // Variables - Styles that are used on more than one component
// #############################
const drawerWidth = 260;
exports.drawerWidth = drawerWidth;
const transition = {
    transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};
exports.transition = transition;
const containerFluid = {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%"
};
exports.containerFluid = containerFluid;
const container = Object.assign(Object.assign({}, containerFluid), { "@media (min-width: 576px)": {
        maxWidth: "540px"
    }, "@media (min-width: 768px)": {
        maxWidth: "720px"
    }, "@media (min-width: 992px)": {
        maxWidth: "960px"
    }, "@media (min-width: 1200px)": {
        maxWidth: "1140px"
    } });
exports.container = container;
const boxShadow = {
    boxShadow: "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
};
exports.boxShadow = boxShadow;
const card = {
    display: "inline-block",
    position: "relative",
    width: "100%",
    margin: "25px 0",
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
    borderRadius: "3px",
    color: "rgba(0, 0, 0, 0.87)",
    background: "#fff"
};
exports.card = card;
const defaultFont = {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    lineHeight: "1.5em"
};
exports.defaultFont = defaultFont;
const primaryColor = "#9c27b0";
exports.primaryColor = primaryColor;
const warningColor = "#ff9800";
exports.warningColor = warningColor;
const dangerColor = "#f44336";
exports.dangerColor = dangerColor;
const successColor = "#4caf50";
exports.successColor = successColor;
const infoColor = "#00acc1";
exports.infoColor = infoColor;
const roseColor = "#e91e63";
exports.roseColor = roseColor;
const grayColor = "#999999";
exports.grayColor = grayColor;
const primaryBoxShadow = {
    boxShadow: "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
};
exports.primaryBoxShadow = primaryBoxShadow;
const infoBoxShadow = {
    boxShadow: "0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"
};
exports.infoBoxShadow = infoBoxShadow;
const successBoxShadow = {
    boxShadow: "0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"
};
exports.successBoxShadow = successBoxShadow;
const warningBoxShadow = {
    boxShadow: "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"
};
exports.warningBoxShadow = warningBoxShadow;
const dangerBoxShadow = {
    boxShadow: "0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"
};
exports.dangerBoxShadow = dangerBoxShadow;
const roseBoxShadow = {
    boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)"
};
exports.roseBoxShadow = roseBoxShadow;
const warningCardHeader = Object.assign({ color: "#fff", background: "linear-gradient(60deg, #ffa726, #fb8c00)" }, warningBoxShadow);
exports.warningCardHeader = warningCardHeader;
const successCardHeader = Object.assign({ color: "#fff", background: "linear-gradient(60deg, #66bb6a, #43a047)" }, successBoxShadow);
exports.successCardHeader = successCardHeader;
const dangerCardHeader = Object.assign({ color: "#fff", background: "linear-gradient(60deg, #ef5350, #e53935)" }, dangerBoxShadow);
exports.dangerCardHeader = dangerCardHeader;
const infoCardHeader = Object.assign({ color: "#fff", background: "linear-gradient(60deg, #26c6da, #00acc1)" }, infoBoxShadow);
exports.infoCardHeader = infoCardHeader;
const primaryCardHeader = Object.assign({ color: "#fff", background: "linear-gradient(60deg, #ab47bc, #8e24aa)" }, primaryBoxShadow);
exports.primaryCardHeader = primaryCardHeader;
const roseCardHeader = Object.assign({ color: "#fff", background: "linear-gradient(60deg, #ec407a, #d81b60)" }, roseBoxShadow);
exports.roseCardHeader = roseCardHeader;
const cardActions = Object.assign({ margin: "0 20px 10px", paddingTop: "10px", borderTop: "1px solid #eeeeee", height: "auto" }, defaultFont);
exports.cardActions = cardActions;
const cardHeader = {
    margin: "-30px 15px 0",
    borderRadius: "3px",
    padding: "15px"
};
exports.cardHeader = cardHeader;
const defaultBoxShadow = {
    border: "0",
    borderRadius: "3px",
    boxShadow: "0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    padding: "10px 0",
    transition: "all 150ms ease 0s"
};
exports.defaultBoxShadow = defaultBoxShadow;
const title = {
    color: "#3C4858",
    margin: "1.75rem 0 0.875rem",
    textDecoration: "none",
    fontWeight: "700",
    fontFamily: `"Roboto Slab", "Times New Roman", serif`
};
exports.title = title;
const cardTitle = Object.assign(Object.assign({}, title), { marginTop: ".625rem" });
exports.cardTitle = cardTitle;
const cardLink = {
    "& + $cardLink": {
        marginLeft: "1.25rem"
    }
};
exports.cardLink = cardLink;
const cardSubtitle = {
    marginBottom: "0",
    marginTop: "-.375rem"
};
exports.cardSubtitle = cardSubtitle;
//# sourceMappingURL=material-kit-react.jsx.map