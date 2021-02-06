"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopStore = void 0;
const mobx_state_tree_1 = require("mobx-state-tree");
const productStore_1 = require("./productStore");
const cartStore_1 = require("./cartStore");
const ViewStore_1 = require("./ViewStore");
exports.ShopStore = mobx_state_tree_1.types
    .model('ShopStore', {
    prodoctStore: mobx_state_tree_1.types.optional(productStore_1.ProdoctStore, {
        prodocts: {},
    }),
    cart: mobx_state_tree_1.types.optional(cartStore_1.CartStore, {
        entries: [],
    }),
    view: mobx_state_tree_1.types.optional(ViewStore_1.ViewStore, {}),
})
    .views(self => ({
    get getProduct() {
        return mobx_state_tree_1.getEnv(self).getProduct;
    },
    get alert() {
        return mobx_state_tree_1.getEnv(self).alert;
    },
    get isLoading() {
        return self.prodoctStore.isLoading;
    },
    get prodocts() {
        return self.prodoctStore.prodocts;
    },
    get sortedAvailableProdocts() {
        return self.prodoctStore.sortedAvailableProdocts;
    },
}))
    .actions(self => ({
    afterCreate() {
        self.prodoctStore.loadProdocts();
    },
}));
//# sourceMappingURL=shopStore.jsx.map