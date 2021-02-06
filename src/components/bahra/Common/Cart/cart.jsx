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
const react_1 = __importStar(require("react"));
const mobx_react_1 = require("mobx-react");
const checkoutIcon_1 = __importDefault(require("../../BahraIcons/checkoutIcon/checkoutIcon"));
const styles_1 = require("../Category/styles");
mobx_react_1.inject("store");
mobx_react_1.observer;
class CartC extends react_1.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { isActive, toolBarOpen, t, cart, store } = this.props;
        const shop = store.shopStore;
        debugger;
        console.log('CartC', this.props);
        return (<section className="Page-cart">
                        <h2>Your cart</h2>
                        <section className="Page-cart-items">
                            {cart.entries.map((entry) => (<>
                                <CartEntry shop={shop} key={entry.product.id} entry={entry}/>
                                </>))}
                        </section>
                        <p>Subtotal: {cart.subtotal} €</p>
                        {cart.hasDiscount && (<p>
                                <i>Large order discount: {cart.discount} €</i>
                            </p>)}
                        <p>
                            <b>Total: {cart.total} €</b>
                        </p>
                        <styles_1.GridContainer active={isActive}>
                        

                        <checkoutIcon_1.default active={isActive} t={t} toolBarOpen={toolBarOpen}/>

                        </styles_1.GridContainer>
                         </section>);
    }
}
const CartEntry = mobx_react_1.inject('shop')(mobx_react_1.observer(({ shop, entry }) => (<div className="Page-cart-item">
                    <p>
                        <a href={`/product/${entry.product.id}`} onClick={onEntryClick.bind(entry, shop)}>
                            {entry.product.name}
                        </a>
                        <button onClick={() => entry.remove()}>Remove</button>
                    </p>
                    {!entry.product.isAvailable && (<p>
                            <b>Not available anymore</b>
                        </p>)}
        
                    <div className="Page-cart-item-details">
                        <p>
                            Amount:
                            <input value={entry.quantity} onChange={updateEntryQuantity.bind(null, entry)}/>
                            total: <b>{entry.price} €</b>
                        </p>
                    </div>
                </div>)));
function onEntryClick(shop, e) {
    shop.view.openproductPage(this.product);
    e.preventDefault();
    return false;
}
function updateEntryQuantity(entry, e) {
    if (e.target.value)
        entry.setQuantity(Number(e.target.value));
}
exports.default = CartC;
//# sourceMappingURL=cart.jsx.map