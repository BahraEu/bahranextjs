"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_spring_1 = require("react-spring");
function Trail(_a) {
    var { open, children } = _a, props = __rest(_a, ["open", "children"]);
    const items = react_1.default.Children.toArray(children);
    const trail = react_spring_1.useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    });
    return (<div className="trails-main" {...props}>
        <div>
          {trail.map((_a, index) => {
        var { x, height } = _a, rest = __rest(_a, ["x", "height"]);
        return (<react_spring_1.animated.div data-key={items[index]} className="trails-text" style={Object.assign(Object.assign({}, rest), { transform: x.interpolate((x) => `translate3d(0,${x}px,0)`) })}>
              <react_spring_1.animated.div style={{ height }}>{items[index]}</react_spring_1.animated.div>
            </react_spring_1.animated.div>);
    })}
        </div>
      </div>);
}
exports.default = Trail;
//# sourceMappingURL=Trail.jsx.map