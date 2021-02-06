"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
const mobx_1 = require("mobx");
const mobx_react_lite_1 = require("mobx-react-lite");
mobx_react_lite_1.enableStaticRendering(typeof window === 'undefined');
class Store {
    constructor() {
        this.lastUpdate = 0;
        this.light = false;
        this.start = () => {
            self.timer = setInterval(() => {
                mobx_1.runInAction(() => {
                    this.lastUpdate = Date.now();
                    this.light = true;
                });
            }, 1000);
        };
        this.stop = () => clearInterval(self.timer);
        this.hydrate = (data) => {
            if (!data)
                return;
            this.lastUpdate = data.lastUpdate !== null ? data.lastUpdate : Date.now();
            this.light = !!data.light;
        };
        mobx_1.makeObservable(this, {
            lastUpdate: mobx_1.observable,
            light: mobx_1.observable,
            start: mobx_1.action,
            hydrate: mobx_1.action,
            timeString: mobx_1.computed,
        });
    }
    get timeString() {
        const pad = (n) => (n < 10 ? `0${n}` : n);
        const format = (t) => `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(t.getUTCSeconds())}`;
        return format(new Date(this.lastUpdate));
    }
}
exports.Store = Store;
//# sourceMappingURL=lightStore.jsx.map