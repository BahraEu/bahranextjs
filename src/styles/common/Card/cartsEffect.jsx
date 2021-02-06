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
const react_spring_1 = require("react-spring");
const style_1 = require("../../../components/bahra/Blogs/style");
const Typography_1 = require("../../Typography");
const mobx_react_1 = require("mobx-react");
const spinner_style_1 = require("@styles/spinner/spinner.style");
const CartsEffect = mobx_react_1.observer(props => {
    const [index, setIndex] = react_1.useState(null);
    const [isDelayed, setIsDelayed] = react_1.useState(true);
    const { currentUrl, products, blogs, artists, events } = props;
    function items(c) {
        if (products.length) {
            return c;
        }
        if (blogs.length) {
            return c;
        }
        if (artists.length) {
            return c;
        }
        if (events.length) {
            return c;
        }
        else {
            return <spinner_style_1.Spinner />;
        }
    }
    const springs = react_spring_1.useSprings(items.length, items.map((_, i) => ({
        delay: isDelayed ? 250 * i : 0,
        opacity: 1,
        transform: "translateY(0px)",
        overlayOpacity: i === index ? 0 : 1,
        HighlightText: i === index ? 1 : 0,
        textHeight: i === index ? "100%" : "0%",
        from: {
            opacity: 0,
            transform: "translateY(100px)",
            overlayOpacity: 1,
            textOpacity: 0,
            textHeight: "0%"
        }
    })));
    debugger;
    console.log("CartsEffectprops", props, index, isDelayed);
    return (<>
          <style_1.GridContainer>
            {springs.map(({ opacity, transform, overflow, textEmphasisStyle, textIndent }, i) => (<style_1.AnimatedItem background={items[i].image.sourceUrl} onClick={() => {
        setIndex(i);
        setIsDelayed(false);
    }} key={i}>
                    {currentUrl.includes('shop') || currentUrl.includes('products') ?
        <style_1.AnimatedItem background={`url(${items[i].image.sourceUrl}?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`} style={{ opacity, transform }}>

                      <style_1.TitleWrapper style={{ opacity: overflow }}>
                        <Typography_1.H1>{items[i].title}</Typography_1.H1>
                      </style_1.TitleWrapper>
                    </style_1.AnimatedItem>
        :
            <style_1.AnimatedItem background={`url(${items[i].image.node.sourceUrl}?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`} style={{ opacity, transform }}>

                    <style_1.TitleWrapper style={{ opacity: overflow }}>
                      <Typography_1.H1>{items[i].title}</Typography_1.H1>
                    </style_1.TitleWrapper>
                  </style_1.AnimatedItem>}
                  <style_1.TextWrapper style={{ height: textIndent }}>
                    <style_1.AnimatedBox style={{ opacity: textEmphasisStyle }} p={2}>
                      <Typography_1.H6>
                        {items[i].date}
                      </Typography_1.H6>
                      
                      <style_1.DetailsBlog dangerouslySetInnerHTML={{ __html: items[i].excerpt }}/>
                    </style_1.AnimatedBox>
                  </style_1.TextWrapper>
                </style_1.AnimatedItem>))}
          </style_1.GridContainer>
         </>);
});
exports.default = CartsEffect;
//# sourceMappingURL=cartsEffect.jsx.map