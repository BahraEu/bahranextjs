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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
const React = __importStar(require("react"));
const head_1 = __importDefault(require("next/head"));
const i18n_1 = require("../../../../i18n");
const drawer_1 = __importDefault(require("../../Drawer/drawer"));
const NavContainer_1 = __importDefault(require("../../Header/NavContainer"));
const mobileNav_1 = __importDefault(require("../../Header/mobileNav/mobileNav"));
const style_1 = require("../blankLayout/style");
const BlankFooter_1 = __importDefault(require("../../Footer/BlankFooter"));
const mainLayoutStyle_1 = require("./mainLayoutStyle");
const ToolsBar_1 = __importDefault(require("./MainToolsBar/ToolsBar"));
const mobx_react_1 = require("mobx-react");
const lodash_1 = require("lodash");
let MainLayout = class MainLayout extends React.Component {
    constructor(props) {
        super(props);
        this.sideBarRef = React.createRef();
        this.handleClickOutside = (event) => {
            const current = this.sideBarRef.current;
            if (current && !current.contains(event.target)) {
                console.log('handleClickOutside', current);
                this.toggletoolBarOpen(false);
            }
        };
        this.toggletoolBarOpen = (toolBarOpen) => {
            this.setState({ toolBarOpen });
            console.log('toggletoolBarOpen', toolBarOpen);
        };
        this.hadelStore = (currentUrl) => {
            if (currentUrl.includes('shop') || 'products') {
                if (!lodash_1.isEmpty(this.props.products)) {
                    let products = this.props.products;
                    this.setState({ products: products });
                    console.log('is not Empty', products);
                }
            }
            if (currentUrl.includes('blog' || 'blogs')) {
                if (!lodash_1.isEmpty(this.props.blogs)) {
                    let blogs = this.props.blogs;
                    this.setState({ blogs: blogs });
                    console.log('is not Empty', blogs);
                }
            }
            if (currentUrl.includes('event' || 'events')) {
                if (!lodash_1.isEmpty(this.props.events)) {
                    let events = this.props.events;
                    this.setState({ events: events });
                    console.log('is not Empty', events);
                }
            }
            if (currentUrl.includes('artist' || 'artists')) {
                if (!lodash_1.isEmpty(this.props.artists)) {
                    let artists = this.props.artists;
                    this.setState({ artists: artists });
                    console.log('is not Empty', artists);
                }
            }
        };
        this.state = {
            products: null,
            artists: null,
            blogs: null,
            events: null,
            user: null,
            toolBarOpen: false,
            isActive: false,
        };
    }
    static async getInitialProps(context) {
        console.log('context', context);
        const userAgent = context.req ? context.req.headers['user-agent'] : navigator.userAgent;
        return { userAgent };
    }
    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, false);
        document.addEventListener('touchstart', this.handleClickOutside, false);
    }
    componentWillUnmount() {
        document.addEventListener('click', this.handleClickOutside, false);
        document.addEventListener('touchstart', this.handleClickOutside, false);
    }
    render() {
        const { currentUrl, bahraContent } = this.props;
        const { isActive, toolBarOpen, tags, categories } = this.state;
        // let activeRoute = BahaRouter(this.props.currentUrl);
        debugger;
        console.log('MainLayout', this.props);
        // const tags=this.state.artists.map
        return (<>
            <head_1.default>
                <title>BAHRA</title>
                <meta name="referrer" content="origin"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </head_1.default>
            <mainLayoutStyle_1.MainLayoutContainer>
                <mobileNav_1.default currentUrl={currentUrl} currentLanguage={this.props.currentLanguage}/>
                <NavContainer_1.default currentUrl={currentUrl} currentLanguage={this.props.currentLanguage}/>
                <drawer_1.default currentUrl={currentUrl} currentLanguage={this.props.currentLanguage}/>
             
                <style_1.PageInfo container={true} id="BAHRA"/>


                
                <mainLayoutStyle_1.InnerGrid>
                <mainLayoutStyle_1.MainLayoutContent item xl={10} lg={10} md={10} xs={10} sm={10}>
                <mainLayoutStyle_1.StyledMainPaper>      
                    {this.props.children}  
                </mainLayoutStyle_1.StyledMainPaper>
                </mainLayoutStyle_1.MainLayoutContent>

            
                <mainLayoutStyle_1.MainToolsBarContent item open={toolBarOpen} ref={this.sideBarRef} onClick={() => this.toggletoolBarOpen(!toolBarOpen)} data-active={isActive} data-open={toolBarOpen} xl={3} lg={2} md={2} xs={2} sm={2}>
                            <ToolsBar_1.default toolBarOpen={toolBarOpen} tags={tags} categories={categories} currentUrl={currentUrl} currentLanguage={this.props.currentLanguage} bahraContent={bahraContent}/>
                          
                 </mainLayoutStyle_1.MainToolsBarContent>    
                  </mainLayoutStyle_1.InnerGrid>    
    

                <BlankFooter_1.default fromFullYear={2020} currentUrl={currentUrl}/>   
            </mainLayoutStyle_1.MainLayoutContainer>
        </>);
    }
};
MainLayout = __decorate([
    mobx_react_1.inject('store'),
    mobx_react_1.observer
], MainLayout);
;
exports.default = i18n_1.withTranslation('common')(MainLayout);
//# sourceMappingURL=mainLayout.jsx.map