"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const subscription_requests_1 = require("../requests/users/subscription-requests");
const resolvers = {
    Query: {
        subscriptions: () => subscription_requests_1.getSubscriptions(),
    },
    Mutation: {
        subscribe: async (__, args) => subscription_requests_1.createSubscription({}, args),
    },
};
exports.default = resolvers;
//# sourceMappingURL=resolvers.js.map