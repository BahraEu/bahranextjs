"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const react_swipeable_views_1 = __importDefault(require("react-swipeable-views"));
const calculateMargin = (selfIndex, slideIndex, speed = 50) => {
    const diff = selfIndex - slideIndex;
    if (Math.abs(diff) > 1)
        return 0;
    return `${diff * speed}%`;
};
const ParallaxSlide = (_a) => {
    var { transition, children, renderElements } = _a, props = __rest(_a, ["transition", "children", "renderElements"]);
    const [index, setIndex] = react_1.useState(0);
    const [fineIndex, setFineIndex] = react_1.useState(index);
    const onChangeIndex = i => {
        setIndex(i);
        setFineIndex(i);
    };
    const views = children({
        fineIndex,
        injectStyle: (slideIndex, speed) => ({
            marginLeft: calculateMargin(slideIndex, fineIndex, speed),
            transition: fineIndex === index ? transition : 'none',
        }),
    });
    const isSingleView = views.length < 2;
    return (<>
      <react_swipeable_views_1.default disabled={isSingleView} resistance springConfig={{
        duration: '0.6s',
        easeFunction: '',
        delay: '0s',
    }} enableMouseEvents {...props} index={index} onChangeIndex={onChangeIndex} onSwitching={i => {
        setFineIndex(i);
    }}>
        {views}
      </react_swipeable_views_1.default>
      {!isSingleView && renderElements({ index, onChangeIndex })}
    </>);
};
ParallaxSlide.propTypes = {
    transition: prop_types_1.default.string,
    children: prop_types_1.default.func.isRequired,
    renderElements: prop_types_1.default.func,
};
ParallaxSlide.defaultProps = {
    transition: '0.8s',
    renderElements: () => { },
};
exports.default = ParallaxSlide;
//# sourceMappingURL=ParallaxSlide.jsx.map