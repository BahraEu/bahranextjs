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
exports.getuserID = exports.isServer = exports.setDirection = exports.changeLanguage = exports.isRtl = exports.redirect = exports.checkTokenIsExpired = exports.filterHtmlProps = exports.debounce = exports.normalizeString = exports.sum = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const routes_1 = require("../services/routes/routes");
const cookie = __importStar(require("cookie"));
const i18n_1 = require("../../i18n");
const parseCookies_1 = __importDefault(require("./parseCookies"));
const sum = (a, b) => a + b;
exports.sum = sum;
/**
 * Based on:
 * - https://stackoverflow.com/questions/20856197/remove-non-ascii-character-in-string
 * - https://gist.github.com/alisterlf/3490957
 *
 * TODO: if necessary, use a package that supports arabic, cyrillic, etc ...
 */
function normalizeString(str) {
    const accents = 'ÀÁÂÃÄÅĄĀāàáâãäåąßÒÓÔÕÕÖØŐòóôőõöøĎďDŽdžÈÉÊËĘèéêëęðÇçČčĆćÐÌÍÎÏĪìíîïīÙÚÛÜŰùűúûüĽĹŁľĺłÑŇŃňñńŔŕŠŚŞšśşŤťŸÝÿýŽŻŹžżźđĢĞģğ';
    const out = 'AAAAAAAAaaaaaaaasOOOOOOOOoooooooDdDZdzEEEEEeeeeeeCcCcCcDIIIIIiiiiiUUUUUuuuuuLLLlllNNNnnnRrSSSsssTtYYyyZZZzzzdGGgg';
    return (str || '')
        .toLowerCase()
        .split('')
        .map((letter) => {
        const index = accents.indexOf(letter);
        return index !== -1 ? out[index] : letter;
    }) // remove accents
        .join('')
        .replace(/[^\x00-\x7F]/g, '') // remove non ascii chars
        .replace(/[^\w\s]/gi, '')
        .replace(/ /g, '-');
}
exports.normalizeString = normalizeString;
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
// based on https://github.com/topheman/npm-registry-browser/blob/master/src/utils/helpers.js
function debounce(func, wait, immediate) {
    let timeout;
    return function debounced(...args) {
        // @ts-ignore
        const context = this;
        const later = function laterFn() {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
            }
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            func.apply(context, args);
        }
    };
}
exports.debounce = debounce;
function filterHtmlProps(props) {
    const disallow = [
        'i18n',
        'i18nOptions',
        'defaultNS',
        'reportNS',
        'tReady',
        'innerRef',
        'translationLanguageFullCode',
        'defaultLanguageShortCode',
        'defaultLanguageFullCode',
        'switchDefaultLanguage',
        'switchTranslationLanguage',
        'resetTranslationLanguage',
    ];
    const filteredProps = {};
    Object.entries(props).forEach(([key, value]) => {
        if (!disallow.includes(key)) {
            filteredProps[key] = value;
        }
    });
    return filteredProps;
}
exports.filterHtmlProps = filterHtmlProps;
function checkTokenIsExpired(token) {
    const decodedToken = jsonwebtoken_1.default.decode(token);
    return (decodedToken === null ||
        typeof decodedToken === 'string' ||
        new Date(decodedToken.exp * 1000) < new Date());
}
exports.checkTokenIsExpired = checkTokenIsExpired;
const redirect = (context, target) => {
    if (context.res) {
        // server
        // 303: "See other"
        context.res.writeHead(303, { Location: target });
        context.res.end();
    }
    else {
        // In the browser, we just pretend like this never even happened ;)
        routes_1.Router.replace(target);
    }
};
exports.redirect = redirect;
exports.isRtl = i18n_1.i18n.dir() === 'rtl' ? true : false;
const changeLanguage = ({ lang, currentLanguage }) => {
    i18n_1.i18n.changeLanguage(lang);
    if (lang !== currentLanguage && lang.includes('Ar')) {
        exports.setDirection(lang);
        document.cookie = cookie.serialize('language', lang, {
            maxAge: 30 * 24 * 60 * 60,
        });
        localStorage.setItem('language', JSON.stringify(lang));
    }
    else {
        exports.setDirection(lang);
        document.cookie = cookie.serialize('language', lang, {
            maxAge: 30 * 24 * 60 * 60,
        });
        localStorage.setItem('language', JSON.stringify(lang));
    }
};
exports.changeLanguage = changeLanguage;
const setDirection = language => document
    .getElementsByTagName('html')[0]
    .setAttribute('dir', language === 'Arabic' ? 'rtl' : 'ltr');
exports.setDirection = setDirection;
exports.isServer = typeof window === 'undefined';
const getuserID = async () => {
    let authToken = null;
    let userID = null;
    let RToken = null;
    try {
        authToken = exports.isServer
            ? parseCookies_1.default().authToken
            : await localStorage.getItem('authToken');
        RToken = await localStorage.getItem('refreshToken');
        console.log(authToken, userID, RToken);
        userID = exports.isServer ? parseCookies_1.default().userID : await localStorage.getItem('userID');
    }
    catch (e) {
        console.log(e);
    }
};
exports.getuserID = getuserID;
//# sourceMappingURL=helpers.js.map