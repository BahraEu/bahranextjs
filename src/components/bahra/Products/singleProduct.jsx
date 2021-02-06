"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const style_1 = require("./style");
const Typography_1 = require("../../../styles/Typography");
const react_1 = __importDefault(require("react"));
const SingleProduct = ({ product }) => {
    debugger;
    return (<div>
            {product ? (<div className="mx-auto mt-5">
                    <div className="row">
                        <style_1.ImgWrap className="col-md-6">
                            <style_1.Img className="product-image" src={product.image.node.sourceUrl}/>
                        </style_1.ImgWrap>
                        <style_1.TitleAndPrice>
                            <style_1.Title>{product.name}</style_1.Title>
                            <style_1.Price>{product.price}</style_1.Price>
                        </style_1.TitleAndPrice>
                    </div>
                    <div className="product-container" key={product.id}>
                        <Typography_1.P>{product.description}</Typography_1.P>
                    </div>
                </div>) : ('')}
        </div>);
};
exports.default = SingleProduct;
//# sourceMappingURL=singleProduct.jsx.map