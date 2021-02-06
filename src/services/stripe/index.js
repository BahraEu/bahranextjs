"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stripe = require('stripe')(process.env.STRIPE_CLIENT_SECRET);
exports.default = stripe;
//# sourceMappingURL=index.js.map