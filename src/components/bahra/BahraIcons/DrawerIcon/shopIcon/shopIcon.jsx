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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const mobx_react_lite_1 = require("mobx-react-lite");
const style_1 = require("../../style");
const i18n_1 = require("../../../../../../i18n");
const react_spring_1 = require("react-spring");
const ShopIcon = mobx_react_lite_1.observer(props => {
    const shopIcon = require('../../../../../../public/images/svg/shop.svg?sprite');
    const [open, toggle] = react_1.useState(false);
    const { freq, scale, transform, opacity } = react_spring_1.useSpring({
        reverse: open,
        from: { scale: 10, opacity: 0, transform: 'scale(0.9)', freq: '0.0175, 0.0' },
        to: { scale: 150, opacity: 1, transform: 'scale(1)', freq: '0.0, 0.0' },
        config: { duration: 3000 }
    });
    const t = props.t;
    const AnimFeTurbulence = react_spring_1.animated('feTurbulence');
    const AnimFeDisplacementMap = react_spring_1.animated('feDisplacementMap');
    return (<>
          
                <react_spring_1.animated.svg onClick={() => toggle} style={{ transform, opacity }}>

                      <defs>
                        <filter id="water">
                            <AnimFeTurbulence type="fractalNoise" baseFrequency={freq} numOctaves="1.5" result="TURB" seed="8"/>
                            <AnimFeDisplacementMap xChannelSelector="R" yChannelSelector="G" in="SourceGraphic" in2="TURB" result="DISP" scale={scale}/>
                        </filter>
                        </defs>
                <style_1.StyledSvgIcon component={shopIcon}/>
                </react_spring_1.animated.svg>
                <style_1.Label>{t('Shop')}</style_1.Label>
        </>);
});
exports.default = i18n_1.withTranslation('common')(ShopIcon);
//# sourceMappingURL=shopIcon.jsx.map