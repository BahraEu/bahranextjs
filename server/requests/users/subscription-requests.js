"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSubscriptions = exports.createSubscription = void 0;
const gen_id_1 = __importDefault(require("../../lib/gen-id"));
const admin_1 = __importDefault(require("../../../src/services/firebase/admin"));
const subscriptions = [
    {
        id: gen_id_1.default(),
        email: 'david@atheros.ai',
        source: 'ARTICLE',
    },
];
const createSubscription = (_, args) => {
    const { input: { email, source }, } = args;
    const newSubscription = {
        id: gen_id_1.default(),
        email,
        source,
    };
    admin_1.default
        .firestore()
        .collection(`Subscriptions`)
        .doc()
        .set({
        newSubscription,
    });
};
exports.createSubscription = createSubscription;
const getSubscriptions = () => subscriptions;
exports.getSubscriptions = getSubscriptions;
//# sourceMappingURL=subscription-requests.js.map