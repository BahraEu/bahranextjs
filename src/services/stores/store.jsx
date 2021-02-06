"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStore = exports.initializeStore = void 0;
const react_1 = require("react");
const mobx_state_tree_1 = require("mobx-state-tree");
const userStore_1 = require("./userStore");
const shopStore_1 = require("./shopStore");
let store;
const mobx_devtools_mst_1 = __importDefault(require("mobx-devtools-mst"));
const Store = mobx_state_tree_1.types
    .model('RootStore', {
    identifier: mobx_state_tree_1.types.optional(mobx_state_tree_1.types.identifier, 'RootStore'),
    userStore: mobx_state_tree_1.types.optional(userStore_1.UserStore, () => userStore_1.UserStore.create({ users: {} })),
    shopStore: mobx_state_tree_1.types.optional(shopStore_1.ShopStore, () => shopStore_1.ShopStore.create({})),
})
    .actions(self => ({
    afterCreate() {
        self.shopStore.prodocts;
    },
    async save() {
        try {
            const transformedSnapshot = mobx_state_tree_1.getSnapshot(self);
            const json = JSON.stringify(transformedSnapshot);
            await localStorage.setItem('appStatePersistenceKey', json);
        }
        catch (err) {
            console.warn('unexpected error ' + err);
        }
    },
}));
function initializeStore(snapshot = null) {
    const _store = store !== null && store !== void 0 ? store : Store.create({ userStore: {} });
    mobx_devtools_mst_1.default(store);
    // If your page has Next.js data fetching methods that use a Mobx store, it will
    // get hydrated here, check `pages/ssg.tsx` and `pages/ssr.tsx` for more details
    if (snapshot) {
        console.log('snapshot');
        mobx_state_tree_1.applySnapshot(_store, snapshot);
    }
    // For SSG and SSR always create a new store
    if (typeof window === 'undefined')
        return _store;
    // Create the store once in the client
    console.log('Create the store once in the client');
    if (!store)
        store = _store;
    return store;
}
exports.initializeStore = initializeStore;
function useStore(initialState) {
    const store = react_1.useMemo(() => initializeStore(initialState), [initialState]);
    return store;
}
exports.useStore = useStore;
//# sourceMappingURL=store.jsx.map