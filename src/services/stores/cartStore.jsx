"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartStore = void 0;
const mobx_1 = require("mobx");
const mobx_state_tree_1 = require("mobx-state-tree");
const productStore_1 = require("./productStore");
const CartEntry = mobx_state_tree_1.types
    .model('CartEntry', {
    quantity: 0,
    prodoct: mobx_state_tree_1.types.reference(productStore_1.Prodoct),
})
    .views(self => ({
    get price() {
        return self.prodoct.price * self.quantity;
    },
    get isValidProdoct() {
        return self.prodoct.isAvailable;
    },
}))
    .actions(self => ({
    increaseQuantity(number) {
        self.quantity += number;
    },
    setQuantity(number) {
        self.quantity = number;
    },
    remove() {
        mobx_state_tree_1.getParent(self, 2).remove(self);
    },
}));
exports.CartStore = mobx_state_tree_1.types
    .model('CartStore', {
    entries: mobx_state_tree_1.types.array(CartEntry),
})
    .views(self => ({
    get shop() {
        return mobx_state_tree_1.getParent(self);
    },
    get subTotal() {
        return self.entries.reduce((sum, e) => sum + e.price, 0);
    },
    get hasDiscount() {
        return self.subTotal >= 100;
    },
    get discount() {
        return self.subTotal * (self.hasDiscount ? 0.1 : 0);
    },
    get total() {
        return self.subTotal - self.discount;
    },
    get canCheckout() {
        return (self.entries.length > 0 &&
            self.entries.every(entry => entry.quantity > 0 && entry.isValidProdoct));
    },
}))
    .actions(self => ({
    afterAttach() {
        if (typeof window !== 'undefined' && window.localStorage) {
            mobx_1.when(() => !self.shop.isLoading, () => {
                self.readFromLocalStorage();
                mobx_1.reaction(() => mobx_state_tree_1.getSnapshot(self), json => {
                    window.localStorage.setItem('cart', JSON.stringify(json));
                });
            });
        }
    },
    addProdoct(prodoct, quantity = 1, notify = true) {
        let entry = self.entries.find(entry => entry.prodoct === prodoct);
        if (!entry) {
            self.entries.push({ prodoct: prodoct });
            entry = self.entries[self.entries.length - 1];
        }
        entry.increaseQuantity(quantity);
        if (notify) {
            self.shop.alert('Added to cart');
        }
    },
    remove(prodoct) {
        mobx_state_tree_1.destroy(prodoct);
    },
    checkout(self) {
        const total = self.total;
        self.clear();
        self.shop.alert(`Bought prodocts for ${total} € !`);
    },
    clear() {
        self.entries.clear();
    },
    readFromLocalStorage() {
        const cartData = window.localStorage.getItem('cart');
        if (cartData) {
            mobx_state_tree_1.applySnapshot(self, JSON.parse(cartData));
        }
    },
}));
//# sourceMappingURL=cartStore.jsx.map