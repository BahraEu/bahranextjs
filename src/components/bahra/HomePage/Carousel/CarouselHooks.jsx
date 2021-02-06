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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable global-require */
const react_1 = __importStar(require("react"));
const react_spring_1 = require("react-spring");
const style_1 = require("./style");
const socialMedia_1 = __importDefault(require("../../../../styles/social-media/socialMedia"));
const i18n_1 = require("../../../../../i18n");
const Carousel = props => {
    const t = props.t;
    const [items] = react_1.useState([
        { title: t('intro'), id: 0 },
        { title: t('intro1'), id: 1 },
        {
            title: t('intro2'),
            id: 2,
        },
    ]);
    const [index, setIndex] = react_1.useState(0);
    const heightProps = react_spring_1.useSpring({
        config: react_spring_1.config.slow,
        from: { height: '0px' },
        to: { height: '700px' },
    });
    const opacityProps = react_spring_1.useSpring({
        config: react_spring_1.config.molasses,
        delay: 600,
        from: { opacity: 0 },
        to: { opacity: 1 },
    });
    const fadingTextPropsTransition = react_spring_1.useTransition(items[index], item => item.id, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { tension: 220, friction: 120 },
    });
    react_1.useEffect(() => {
        const interval = setInterval(() => {
            setIndex(state => (state + 1) % items.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);
    // const Router = useRouter()
    return (<style_1.StyledContainer>
            <style_1.CarouselBahra>
                <react_spring_1.animated.section style={heightProps}>
                            <style_1.MiddelColumn item xl={10} lg={10} md={8} xs={6} sm={4}>                   
                             <react_spring_1.animated.div style={opacityProps}>

                                    {fadingTextPropsTransition.map(({ item, props, key }) => (<react_spring_1.animated.div key={key} style={Object.assign({}, props)}>
                                            <style_1.Title>{item.title}</style_1.Title>
                                           
                                    
                                            </react_spring_1.animated.div>))}
                                            
                            </react_spring_1.animated.div>
                          
                            </style_1.MiddelColumn> 
                </react_spring_1.animated.section>
                <style_1.CarouselFooter>
                
                <socialMedia_1.default />
            </style_1.CarouselFooter>
            </style_1.CarouselBahra>
        </style_1.StyledContainer>);
};
exports.default = i18n_1.withTranslation('common')(Carousel);
//# sourceMappingURL=CarouselHooks.jsx.map