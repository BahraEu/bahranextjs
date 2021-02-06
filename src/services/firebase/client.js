"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("firebase/app"));
require("firebase/auth");
if (!app_1.default.apps.length) {
    app_1.default.initializeApp({
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.FIREBASE_DATABASE_URL,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID,
    });
}
// TODO
// As httpOnly cookies are to be used, do not persist any state client side.
app_1.default.auth().setPersistence((_b = (_a = app_1.default.auth.Auth) === null || _a === void 0 ? void 0 : _a.Persistence) === null || _b === void 0 ? void 0 : _b.NONE);
exports.default = app_1.default;
//# sourceMappingURL=client.js.map