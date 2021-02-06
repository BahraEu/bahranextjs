"use strict";
// https://developer.paypal.com/docs/checkout/reference/server-integration/setup-sdk/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const checkout_server_sdk_1 = __importDefault(require("@paypal/checkout-server-sdk"));
const environment = () => {
    const clientId = process.env.PAYPAL_CLIENT_ID;
    const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
    if (process.env.NODE_ENV === 'production') {
        return new checkout_server_sdk_1.default.core.LiveEnvironment(clientId, clientSecret);
    }
    else {
        return new checkout_server_sdk_1.default.core.SandboxEnvironment(clientId, clientSecret);
    }
};
const client = () => {
    return new checkout_server_sdk_1.default.core.PayPalHttpClient(environment());
};
exports.default = client;
//# sourceMappingURL=index.js.map