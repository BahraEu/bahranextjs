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
const core_1 = require("@material-ui/core");
const react_spring_1 = require("react-spring");
const LogoIcon = () => {
    const logoIcon = require('../../../../../public/images/svg/logo.svg?sprite');
    const [state, toggle] = react_1.useState(true);
    const { x } = react_spring_1.useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 1000 } });
    return (<>
           
                <div onClick={() => toggle(!state)}>
    
                 <react_spring_1.animated.div style={{
        opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
        transform: x
            .interpolate({
            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
        })
            .interpolate(x => `scale(${x})`)
    }}>
            
                    <core_1.SvgIcon component={logoIcon} style={{
        width: '3.6em',
        height: '5em',
    }}/>  
            
                </react_spring_1.animated.div>   
              </div>
                
        </>);
};
exports.default = LogoIcon;
//# sourceMappingURL=index.jsx.map