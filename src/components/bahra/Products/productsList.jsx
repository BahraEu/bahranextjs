"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Dependencies
const react_1 = __importDefault(require("react"));
const mobx_react_1 = require("mobx-react");
const lodash_1 = require("lodash");
const cartsEffect_1 = __importDefault(require("../../../styles/common/Card/cartsEffect"));
let ProductsList = class ProductsList extends react_1.default.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        try {
            if (!lodash_1.isEmpty(this.props.products)) {
                this.setState({ products: this.props.products });
            }
            else {
                null;
            }
            ;
        }
        catch (_a) {
            (e) => console.log(e);
        }
    }
    render() {
        const { store, products, currentUrl } = this.props;
        console.log('Products List Props', this.props);
        //let products=JSON.stringify(this.props.products)
        const productsM = JSON.stringify(this.props.products);
        const shopStore = store.shopStore.prodoctStore.loadProdocts(JSON.parse(productsM)).catch((e) => console.log(e));
        store.save();
        console.log('shopStore', shopStore);
        return (<>
                  <cartsEffect_1.default products={products} currentUrl={currentUrl}/>
                    
                </>);
    }
};
ProductsList = __decorate([
    mobx_react_1.inject('store'),
    mobx_react_1.observer
], ProductsList);
exports.default = ProductsList;
//# sourceMappingURL=productsList.jsx.map