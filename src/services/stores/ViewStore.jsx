"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewStore = void 0;
const mobx_state_tree_1 = require("mobx-state-tree");
exports.ViewStore = mobx_state_tree_1.types
    .model({
    page: 'prodocts',
    selectedProdoctId: '',
})
    .views((self) => ({
    get shop() {
        return mobx_state_tree_1.getParent(self);
    },
    get isLoading() {
        return self.shop.isLoading;
    },
    get currentUrl() {
        switch (self.page) {
            case 'prodocts':
                return '/';
            case 'prodoct':
                return '/prodoct/' + self.selectedProdoctId;
            case 'cart':
                return '/cart';
            default:
                return '/404';
        }
    },
    get selectedProdoct() {
        return self.isLoading || !self.selectedProdoctId
            ? null
            : self.shop.prodocts.get(self.selectedProdoctId);
    },
}))
    .actions((self) => ({
    openProdoctsPage() {
        self.page = 'prodocts';
        self.selectedProdoctId = '';
    },
    openProdoctPage(prodoct) {
        self.page = 'prodoct';
        self.selectedProdoctId = prodoct.id;
    },
    openProdoctPageById(id) {
        self.page = 'prodoct';
        self.selectedProdoctId = id;
    },
    openCartPage() {
        self.page = 'cart';
        self.selectedProdoctId = '';
    },
}));
//# sourceMappingURL=ViewStore.jsx.map