const { config } = require('dotenv');
const path = require('path');
const { NODE_ENV, CUSTOM_ENV } = process.env;
const DIR = path.resolve(__dirname, NODE_ENV === 'production' ? '../' : '/');
config({
    path: `${DIR}/${NODE_ENV}-${CUSTOM_ENV}.env`,
});
module.exports = {
    BUNDLE_ANALYZE: process.env.BUNDLE_ANALYZE,
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    HOST: process.env.HOST,
    IS_PROD: process.env.NODE_ENV === 'production',
    GA_TRACKING_ID: process.env.GA_TRACKING_ID || 'XXX-XXX-XXX',
    WP_BAHRA: process.env.WP_BAHRA,
    DEV: process.env.NODE_ENV !== 'production',
    BASE_URL: process.env.BASE_URL,
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
    PAYPAL_CLIENT_SECRET: process.env.PAYPAL_CLIENT_SECRET,
    STRIPE_CLIENT_ID: process.env.STRIPE_CLIENT_ID,
    STRIPE_CLIENT_SECRET: process.env.STRIPE_CLIENT_SECRET,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
    COUPON_SALT: process.env.COUPON_SALT,
    COUPON_URL: process.env.COUPON_URL,
    FIREBASE_ADMIN_UID: process.env.FIREBASE_ADMIN_UID,
    WP_authToken: process.env.WP_authToken,
    Language: process.env.Language,
    Theme: process.env.Theme,
    UserId: process.env.UserId,
    Username: process.env.username,
};
//# sourceMappingURL=config.js.map