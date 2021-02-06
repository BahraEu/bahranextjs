"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbbreviateNumber_1 = __importDefault(require("../AbbreviateNumber"));
describe('abbreviateNumber', () => {
    const lessThan1k = [
        {
            value: 5,
            result: 5,
        },
        {
            value: 76,
            result: 76,
        },
        {
            value: 999,
            result: 999,
        },
    ];
    const greaterThan1k = [
        {
            value: 1000,
            result: '1k',
        },
        {
            value: 3500,
            result: '3.5k',
        },
        {
            value: 18000,
            result: '18k',
        },
        {
            value: 350000,
            result: '350k',
        },
    ];
    const greaterThan1M = [
        {
            value: 1000000,
            result: '1M',
        },
        {
            value: 3500000,
            result: '3.5M',
        },
        {
            value: 18000000,
            result: '18M',
        },
        {
            value: 350000000,
            result: '350M',
        },
    ];
    const greaterThan1G = [
        {
            value: 1000000000,
            result: '1G',
        },
        {
            value: 3500000000,
            result: '3.5G',
        },
        {
            value: 18000000000,
            result: '18G',
        },
        {
            value: 350000000000,
            result: '350G',
        },
    ];
    it('should return the same number passed when it is less than 1000', () => {
        lessThan1k.forEach(number => {
            expect(AbbreviateNumber_1.default(number.value)).toBe(`${number.result}`);
        });
    });
    it('should attach k suffix when it is greater than 1000 and less than 1 Million', () => {
        greaterThan1k.forEach(number => {
            expect(AbbreviateNumber_1.default(number.value)).toBe(number.result);
        });
    });
    it('should attach M suffix when it is greater than 1 Million and less than 1 Billion', () => {
        greaterThan1M.forEach(number => {
            expect(AbbreviateNumber_1.default(number.value)).toBe(number.result);
        });
    });
    it('should attach G suffix when it is greater than 1 Billion and less than 1 Trillion', () => {
        greaterThan1G.forEach(number => {
            expect(AbbreviateNumber_1.default(number.value)).toBe(number.result);
        });
    });
    it('should return an empty string with invalid numbers', () => {
        [null, undefined, '', -5].forEach(number => {
            expect(AbbreviateNumber_1.default(number)).toBe('');
        });
    });
});
//# sourceMappingURL=AbbreviateNumber.spec.js.map