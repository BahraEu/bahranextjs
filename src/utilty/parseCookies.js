"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeMapInCookie = exports.setMapInCookie = void 0;
const cookie = __importStar(require("cookie"));
const parseCookies = (req, options = {}) => {
    let documentCookie = '';
    if (typeof window !== 'undefined') {
        documentCookie = document.cookie;
    }
    return cookie.parse(req ? req.headers.cookie || '' : documentCookie, options);
};
exports.default = parseCookies;
const forIn_1 = __importDefault(require("lodash/forIn"));
function setMapInCookie(res, map) {
    let cookies = '';
    forIn_1.default(map, (value, key) => {
        cookies += `${key}=${value}; `;
    });
    res.setHeader('Set-Cookie', cookies + 'Path=/; Secure; HttpOnly;');
}
exports.setMapInCookie = setMapInCookie;
function removeMapInCookie(keys, res) {
    let cookies = '';
    keys.map(key => {
        cookies += `${key}=deleted; `;
    });
    res.setHeader('Set-Cookie', cookies + 'Path=/; Secure; HttpOnly;');
}
exports.removeMapInCookie = removeMapInCookie;
//# sourceMappingURL=parseCookies.js.map