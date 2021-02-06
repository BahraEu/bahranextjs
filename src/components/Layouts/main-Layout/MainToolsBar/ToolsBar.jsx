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
const react_1 = __importDefault(require("react"));
const mobx_react_1 = require("mobx-react");
const ToolBarStyles_1 = require("./ToolBarStyles");
const category_1 = __importDefault(require("../../../bahra/Common/Category/category"));
const cart_1 = __importDefault(require("../../../bahra/Common/Cart/cart"));
const tag_1 = __importDefault(require("../../../bahra/Common/Tag/tag"));
const artistsIcon_1 = __importDefault(require("../../../bahra/BahraIcons/DrawerIcon/artistsIcon/artistsIcon"));
const eventsIcon_1 = __importDefault(require("../../../bahra/BahraIcons/DrawerIcon/eventsIcon/eventsIcon"));
const blogsIcon_1 = __importDefault(require("../../../bahra/BahraIcons/DrawerIcon/blogsIcon/blogsIcon"));
const SortByIcon_1 = require("../../../bahra/BahraIcons/ToolsBarIcon/SortByIcon");
const FilterIcon_1 = require("../../../bahra/BahraIcons/ToolsBarIcon/FilterIcon");
const lodash_1 = require("lodash");
const i18n_1 = require("../../../../../i18n");
const styles_1 = require("../../../../components/bahra/BahraIcons/ToolsBarIcon/styles");
var ToolsBarisActive;
(function (ToolsBarisActive) {
    ToolsBarisActive[ToolsBarisActive["categoriesActive"] = 0] = "categoriesActive";
    ToolsBarisActive[ToolsBarisActive["tagsActive"] = 1] = "tagsActive";
    ToolsBarisActive[ToolsBarisActive["filterActive"] = 2] = "filterActive";
    ToolsBarisActive[ToolsBarisActive["cartActive"] = 3] = "cartActive";
    ToolsBarisActive[ToolsBarisActive["sortByActive"] = 4] = "sortByActive";
})(ToolsBarisActive || (ToolsBarisActive = {}));
let ToolsBar = class ToolsBar extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.wrapperRef = react_1.default.createRef();
        this.handleClickOutside = (event) => {
            const current = this.wrapperRef.current;
            if (current && !current.contains(event.target)) {
                this.toggletoolBarActive({ activeToolBar: null, active: false });
            }
        };
        this.toggletoolBarActive = (activeToolBar) => {
            try {
                if (activeToolBar.categories !== null) {
                    if (!lodash_1.isEmpty(this.props.bahraContent.categories)) {
                        this.setState({ activeToolBar: { categories: { id: this.props.bahraContent.categories, categoriesActive: true } } });
                        this.setState({ active: true });
                    }
                }
                if (activeToolBar.tags !== null) {
                    if (!lodash_1.isEmpty(this.props.bahraContent.tags)) {
                        this.setState({ activeToolBar: { tags: { id: this.props.bahraContent.tags, tagsActive: true } } });
                        this.setState({ active: true });
                    }
                }
                if (activeToolBar.filter !== null) {
                    if (!lodash_1.isEmpty(this.props.bahraContent.filter)) {
                        this.setState({ active: true });
                        this.setState({ activeToolBar: { filter: { id: this.props.bahraContent.filter, filterActive: true } } });
                    }
                }
                if (activeToolBar.sortBy !== null) {
                    if (!lodash_1.isEmpty(this.props.bahraContent.sortBy)) {
                        this.setState({ active: true });
                        this.setState({ activeToolBar: { sortBy: { id: this.props.bahraContent.sortBy, sortByActive: true } } });
                    }
                }
            }
            catch (_a) {
                (e) => console.error(e);
            }
            finally {
                ((e) => console.error(e));
            }
        };
        this.state = {
            toolBarOpen: false,
            isActive: null,
            active: false,
            categories: null,
            tags: null,
            cart: null,
            activeToolBar: {
                categories: { id: null, categoriesActive: false },
                tags: { id: null, tagsActive: false },
                filter: { id: null, filterActive: false },
                sortBy: { id: null, sortByActive: false },
                cart: { id: null, cartActive: false },
            },
        };
    }
    componentDidMount() {
        () => {
            if (lodash_1.isEmpty(this.state.activeToolBar) && this.props.toolBarOpen) {
                this.toggletoolBarActive;
            }
            else {
                this.setState({ active: false });
                this.setState({ activeToolBar: null });
            }
        };
        document.addEventListener('click', this.handleClickOutside, false);
        document.addEventListener('touchstart', this.handleClickOutside, false);
    }
    componentWillUnmount() {
        document.addEventListener('click', this.handleClickOutside, false);
        document.addEventListener('touchstart', this.handleClickOutside, false);
    }
    render() {
        console.log('ToolsBarProps', this.props);
        const isActive = this.state.isActive;
        const { toolBarOpen, t, currentLanguage, currentUrl } = this.props;
        const { cart, categories, tags, active } = this.state;
        debugger;
        console.log('ToolsBarstarte', this.state, this.props, active, currentLanguage);
        return (<>
                {currentUrl.includes('shop') || currentUrl.includes('products') ?
            <ToolBarStyles_1.StyledTopToolBarIcons onClick={() => console.log('')} data-active={isActive}>
                        <cart_1.default cart={cart} active={active} t={t} toolBarOpen={toolBarOpen}/> 

                       </ToolBarStyles_1.StyledTopToolBarIcons>
            : null}
                {currentUrl.includes('blog' || 'blogs') ?
            <ToolBarStyles_1.StyledTopToolBarIcons>
                             <blogsIcon_1.default toolBarOpen={toolBarOpen}/>
                        </ToolBarStyles_1.StyledTopToolBarIcons>
            : null}
                {currentUrl.includes('artist' || 'artists') ?
            <ToolBarStyles_1.StyledTopToolBarIcons>
                            <artistsIcon_1.default toolBarOpen={toolBarOpen}/>
                                       </ToolBarStyles_1.StyledTopToolBarIcons>
            : null}

                {currentUrl.includes('event' || 'events') ?
            <ToolBarStyles_1.StyledTopToolBarIcons>
                             <eventsIcon_1.default toolBarOpen={toolBarOpen}/>
                           </ToolBarStyles_1.StyledTopToolBarIcons>
            : null}   
          
                {toolBarOpen ? (<>
                    <ToolBarStyles_1.StyledToolBar active={this.state.active} open={toolBarOpen}>
                        <div>

                       <styles_1.StyledToolBarIcons open={toolBarOpen} active={active} ref={this.wrapperRef} onClick={() => this.toggletoolBarActive({ activeToolBar: categories, active: true })} data-active={isActive}>
                            <category_1.default categories={categories} isActive={active}/>
                        </styles_1.StyledToolBarIcons>
                        </div>

                        <div>
                        <styles_1.StyledToolBarIcons open={toolBarOpen} active={active} ref={this.wrapperRef} onClick={() => this.toggletoolBarActive({ activeToolBar: lodash_1.sortBy, active: true })} data-active={isActive}>
                         <SortByIcon_1.StyledIconSortBy t={t}/>
                        </styles_1.StyledToolBarIcons>
                        </div>
           
                       

                            <div>
                              <styles_1.StyledToolBarIcons open={toolBarOpen} active={active} ref={this.wrapperRef} onClick={() => this.toggletoolBarActive({ activeToolBar: lodash_1.filter, active: true })} data-active={isActive}>
                                    <FilterIcon_1.StyledIconFilter t={t}/>
                                </styles_1.StyledToolBarIcons>    
                            </div>
                                        

                            <div>
                            <styles_1.StyledToolBarIcons open={toolBarOpen} active={active} ref={this.wrapperRef} onClick={() => this.toggletoolBarActive({ activeToolBar: tags, active: true })} data-active={isActive}>
                                <tag_1.default isActive={active} tags={tags}/>
                            </styles_1.StyledToolBarIcons>

                            
                            </div>
                  
                    
                        
                    </ToolBarStyles_1.StyledToolBar>
                    </>) : null}


            </>);
    }
};
ToolsBar = __decorate([
    mobx_react_1.inject('store'),
    mobx_react_1.observer
], ToolsBar);
exports.default = i18n_1.withTranslation("common")(ToolsBar);
//# sourceMappingURL=ToolsBar.jsx.map