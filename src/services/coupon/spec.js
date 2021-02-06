"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const _1 = require(".");
describe('getAsDiscount', () => {
    it('applies successfully the discount if coupon', async () => {
        const data = {
            data: {
                ppp: {
                    pppConversionFactor: 0.1,
                },
            },
        };
        const get = jest.spyOn(axios_1.default, 'get');
        get.mockImplementationOnce(() => Promise.resolve(data));
        await expect(_1.getAsDiscount(100, 'MY_COUPON')).resolves.toEqual(10);
    });
    it('applies no discount if no coupon', async () => {
        const data = {
            data: {
                ppp: {
                    pppConversionFactor: 0.1,
                },
            },
        };
        const get = jest.spyOn(axios_1.default, 'get');
        get.mockImplementationOnce(() => Promise.resolve(data));
        await expect(_1.getAsDiscount(100, 'MY_COUPON')).resolves.toEqual(100);
    });
    it('applies no discount if third-party API throws error', async () => {
        const get = jest.spyOn(axios_1.default, 'get');
        get.mockImplementationOnce(() => Promise.reject(new Error('error')));
        await expect(_1.getAsDiscount(100, 'MY_COUPON')).resolves.toEqual(100);
    });
});
//# sourceMappingURL=spec.js.map