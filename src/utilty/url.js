"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPathName = exports.getBasePath = void 0;
/**
 * Will be used to get canonical urls in meta-tags
 * Will be overriden if NEXTJS_APP_CLIENT_BASE_PATH is set in env vars
 */
const getBasePath = (req, location) => {
    if (process.env.NEXTJS_APP_CLIENT_BASE_PATH) {
        return process.env.NEXTJS_APP_CLIENT_BASE_PATH;
    }
    if (req) {
        const [hostname, port] = ((req.headers && req.headers.host && req.headers.host) ||
            req.hostname).split(":");
        // ⚠️ TODO check - protocol might be hidden from a reverse proxy or whatever ?
        return `${req.protocol}://${hostname}${port && port !== "80" ? `:${port}` : ""}`;
    }
    if (location) {
        return `${location.protocol}//${location.hostname}${location.port && location.port !== "80" ? `:${location.port}` : ""}`;
    }
};
exports.getBasePath = getBasePath;
const getPathName = (router) => {
    const [pathname] = ((router && router.asPath) || "").split("?");
    return pathname;
};
exports.getPathName = getPathName;
//# sourceMappingURL=url.js.map