"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAsDiscount = void 0;
const axios_1 = __importDefault(require("axios"));
const getPpp = async (countryCodeIsoAlpha2) => await axios_1.default.get(`${process.env.COUPON_URL}${countryCodeIsoAlpha2}`);
const getPppAmount = (amount, ppp) => {
    return ppp
        ? Number((ppp.pppConversionFactor * amount).toFixed(0))
        : amount;
};
const getAsDiscount = async (amount, coupon) => {
    if (!coupon) {
        return amount;
    }
    try {
        const salt = process.env.COUPON_SALT || '';
        const countryCodeIsoAlpha2 = coupon.replace(salt, '');
        const { data } = await getPpp(countryCodeIsoAlpha2);
        return getPppAmount(amount, data.ppp);
    }
    catch (error) {
        return amount;
    }
};
exports.getAsDiscount = getAsDiscount;
//# sourceMappingURL=index.js.map