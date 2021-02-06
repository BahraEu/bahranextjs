"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdoctStore = exports.Prodoct = void 0;
const mobx_1 = require("mobx");
const mobx_state_tree_1 = require("mobx-state-tree");
exports.Prodoct = mobx_state_tree_1.types.model('Prodoct', {
    id: mobx_state_tree_1.types.identifier,
    name: mobx_state_tree_1.types.string,
    author: mobx_state_tree_1.types.string,
    series_t: mobx_state_tree_1.types.optional(mobx_state_tree_1.types.string, ''),
    sequence_i: mobx_state_tree_1.types.number,
    genre_s: mobx_state_tree_1.types.string,
    pages_i: mobx_state_tree_1.types.number,
    price: mobx_state_tree_1.types.number,
    isAvailable: true,
});
exports.ProdoctStore = mobx_state_tree_1.types
    .model('ProdoctStore', {
    isLoading: true,
    prodocts: mobx_state_tree_1.types.map(exports.Prodoct),
})
    .views(self => ({
    get shop() {
        return mobx_state_tree_1.getParent(self);
    },
    get sortedAvailableProdocts() {
        return sortProdocts(mobx_1.values(self.prodocts));
    },
}))
    .actions(self => {
    function markLoading(loading) {
        self.isLoading = loading;
    }
    function updateProdocts(json) {
        mobx_1.values(self.prodocts).forEach((product) => (product.isAvailable = false));
        json.forEach(function (prodoctJson) {
            self.prodocts.put(prodoctJson);
            self.prodocts.get(prodoctJson.id).isAvailable = true;
        });
    }
    const loadProdocts = mobx_state_tree_1.flow(function* loadProdocts(json) {
        try {
            updateProdocts(json);
            markLoading(false);
        }
        catch (err) {
            console.error('Failed to load prodocts ', err);
        }
    });
    return {
        updateProdocts,
        loadProdocts,
    };
});
function sortProdocts(prodocts) {
    return prodocts
        .filter(b => b.isAvailable)
        .sort((a, b) => (a.name > b.name ? 1 : a.name === b.name ? 0 : -1));
}
//# sourceMappingURL=productStore.jsx.map