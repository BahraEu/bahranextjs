"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.event = exports.pageview = void 0;
const config_1 = require("../../../config/config");
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const pageview = (url) => {
    window.gtag('config', config_1.GA_TRACKING_ID, {
        // eslint-disable-next-line @typescript-eslint/camelcase
        page_location: url,
    });
};
exports.pageview = pageview;
const event = ({ action, category, label, value }) => {
    window.gtag('event', action, {
        // eslint-disable-next-line @typescript-eslint/camelcase
        event_category: category,
        // eslint-disable-next-line @typescript-eslint/camelcase
        event_label: label,
        value,
    });
};
exports.event = event;
//# sourceMappingURL=gtag.js.map