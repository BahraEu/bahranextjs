"use strict";
// Based on https://github.com/topheman/npm-registry-browser/blob/master/src/components/Footer.js
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const helpers_1 = require("../../utilty/helpers");
const style_1 = require("./style");
const BlankFooter = (_a) => {
    var { fromFullYear, toFullYear, currentUrl } = _a, remainingProps = __rest(_a, ["fromFullYear", "toFullYear", "currentUrl"]);
    return (<style_1.FooterWrapper {...helpers_1.filterHtmlProps(remainingProps)}>
            <div>
                ©{fromFullYear === toFullYear ? toFullYear : `${fromFullYear}-${toFullYear}`}{' '}
                <a href="http://BAHRA.com/">bahra.eu</a>
            </div>
        </style_1.FooterWrapper>);
};
BlankFooter.defaultProps = {
    toFullYear: new Date().getFullYear(),
};
exports.default = BlankFooter;
//# sourceMappingURL=BlankFooter.jsx.map