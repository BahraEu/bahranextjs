"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStores = exports.storesContext = exports.DrawerStore = exports.ThemeStore = exports.CounterStore = void 0;
const lodash_1 = require("lodash");
const mobx_1 = require("mobx");
const react_1 = __importDefault(require("react"));
class CounterStore {
    constructor() {
        this.count = 0;
    }
    increment() {
        this.count++;
    }
    decrement() {
        this.count--;
    }
    get doubleCount() {
        return this.count * 2;
    }
}
__decorate([
    mobx_1.observable
], CounterStore.prototype, "count", void 0);
__decorate([
    mobx_1.action
], CounterStore.prototype, "increment", null);
__decorate([
    mobx_1.action
], CounterStore.prototype, "decrement", null);
__decorate([
    mobx_1.computed
], CounterStore.prototype, "doubleCount", null);
exports.CounterStore = CounterStore;
class ThemeStore {
    constructor() {
        this.theme = '';
    }
    setTheme(newTheme) {
        this.theme = newTheme;
    }
}
__decorate([
    mobx_1.observable
], ThemeStore.prototype, "theme", void 0);
__decorate([
    mobx_1.action
], ThemeStore.prototype, "setTheme", null);
exports.ThemeStore = ThemeStore;
class DrawerStore {
    constructor() {
        this.IdrawerOpen = false;
    }
    setDrawer(newDrawer) {
        this.IdrawerOpen = newDrawer;
    }
    togDrawer(drawerOpen) {
        !lodash_1.isEmpty(drawerOpen) ? !drawerOpen : this.IdrawerOpen;
    }
}
__decorate([
    mobx_1.observable
], DrawerStore.prototype, "IdrawerOpen", void 0);
__decorate([
    mobx_1.action
], DrawerStore.prototype, "setDrawer", null);
__decorate([
    mobx_1.action
], DrawerStore.prototype, "togDrawer", null);
exports.DrawerStore = DrawerStore;
exports.storesContext = react_1.default.createContext({
    counterStore: new CounterStore(),
    drawerStore: new DrawerStore(),
});
const useStores = () => react_1.default.useContext(exports.storesContext);
exports.useStores = useStores;
//# sourceMappingURL=counterStore.jsx.map