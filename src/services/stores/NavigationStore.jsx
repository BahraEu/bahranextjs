"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationStore = exports.RouteParams = exports.RouteParam = void 0;
const mobx_state_tree_1 = require("mobx-state-tree");
const userStore_1 = require("./userStore");
const { map, union, safeReference, reference } = mobx_state_tree_1.types;
const getTypeFromJson = json => {
    const identifier = json.id || json;
    return identifier.startsWith('coount') ? reference(userStore_1.wpUser) : reference(userStore_1.wpUser);
};
exports.RouteParam = map(union({ dispatcher: getTypeFromJson }, safeReference(userStore_1.wpUser), safeReference(userStore_1.wpUser)));
exports.RouteParams = mobx_state_tree_1.types.model('RouteParams', {
    routeKey: mobx_state_tree_1.types.identifier,
    params: exports.RouteParam,
});
exports.NavigationStore = mobx_state_tree_1.types
    .model('NavigationStore', {
    paramsMap: map(exports.RouteParams),
})
    .views(self => ({
    getParamsForCurrentRoute(navigation) {
        const { state: { key }, } = navigation;
        let paramsObject = {};
        Array.from(self.paramsMap.get(key).params.entries()).forEach(([key, value]) => {
            paramsObject[key] = value;
        });
        return paramsObject;
    },
}))
    .actions(self => ({
    setParamsForRoute(params) {
        self.paramsMap.put(params);
    },
    afterCreate() {
        mobx_state_tree_1.onSnapshot(self, () => {
            const rootStore = mobx_state_tree_1.getRoot(self);
            rootStore.save();
        });
    },
}));
//# sourceMappingURL=NavigationStore.jsx.map