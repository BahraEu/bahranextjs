"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const mobx_react_lite_1 = require("mobx-react-lite");
const style_1 = require("../../style");
const i18n_1 = require("../../../../../../i18n");
const react_spring_1 = require("react-spring");
const AccountIcon = mobx_react_lite_1.observer(props => {
    const Icon = require('../../../../../../public/images/svg/account.svg?sprite');
    const { t, Open } = props;
    const { freq, scale, transform, opacity } = react_spring_1.useSpring({
        reverse: Open,
        from: { scale: 10, opacity: 1, transform: 'scale(0.9)', freq: '0.0175, 0.0' },
        to: { scale: 150, opacity: 1, transform: 'scale(1)', freq: '0.0, 0.0' },
        config: { duration: 3000 }
    });
    const AnimFeTurbulence = react_spring_1.animated('feTurbulence');
    const AnimFeDisplacementMap = react_spring_1.animated('feDisplacementMap');
    return (<>

                <react_spring_1.animated.svg style={{ transform, opacity }}>

                        <defs>
                        <filter id="water">
                            <AnimFeTurbulence type="fractalNoise" baseFrequency={freq} numOctaves="1.5" result="TURB" seed="8"/>
                            <AnimFeDisplacementMap xChannelSelector="R" yChannelSelector="G" in="SourceGraphic" in2="TURB" result="DISP" scale={scale}/>
                        </filter>
                        </defs>
                        <style_1.StyledSvgIcon component={Icon}/>    
                        </react_spring_1.animated.svg>
                   
                                 <style_1.Label>
                            {t('Account')}
                  </style_1.Label>
        </>);
});
exports.default = i18n_1.withTranslation('common')(AccountIcon);
//# sourceMappingURL=accountIcon.jsx.map