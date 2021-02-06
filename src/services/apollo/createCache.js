"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_cache_inmemory_1 = require("apollo-cache-inmemory");
const cache = new apollo_cache_inmemory_1.InMemoryCache({
    dataIdFromObject: (object) => {
        switch (object.__typename) {
            case 'Post':
                return object.id; // use `id` as the primary key
            case 'Project':
                return object.id;
            case 'Category':
                return object.id;
            case 'User':
                return object.id;
            default:
                return apollo_cache_inmemory_1.defaultDataIdFromObject(object); // fall back to default handling
        }
    }
});
exports.default = cache;
//# sourceMappingURL=createCache.js.map