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
const React = __importStar(require("react"));
const style_1 = require("./style");
const counterStore_1 = require("../../../services/stores/counterStore");
const mobx_react_1 = require("mobx-react");
const index_1 = __importDefault(require("../../../components/bahra/BahraIcons/LogoIcon/index"));
const Toolbar_1 = __importDefault(require("@material-ui/core/Toolbar"));
const IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
const AccountCircle_1 = __importDefault(require("@material-ui/icons/AccountCircle"));
const MoreVert_1 = __importDefault(require("@material-ui/icons/MoreVert"));
const HeaderTop_1 = __importDefault(require("../HeaderTop/HeaderTop"));
const core_1 = require("@material-ui/core");
const NotificationsNoneRounded_1 = __importDefault(require("@material-ui/icons/NotificationsNoneRounded"));
const renderMenu_1 = __importDefault(require("../Menu/renderMenu"));
// import { LogoContainer } from '../../bahra/BahraIcons/style';
const renderMobileMenu_1 = __importDefault(require("../Menu/renderMobileMenu"));
const Menu_1 = __importDefault(require("../Menu/Menu"));
const i18n_1 = require("../../../../i18n");
const mobx_1 = require("mobx");
const HeaderNav = mobx_react_1.observer(props => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    // const observable([drawerOpen, setDrawerOpen]) = React.useState(false) 
    const store = counterStore_1.useStores();
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const drawerOpen = mobx_1.observable(store.drawerStore.IdrawerOpen);
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };
    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const menuId = 'primary-search-account-menu';
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const { t } = props;
    debugger;
    console.log('header', store);
    return (<div style={{ flexGrow: 1 }}>
      <style_1.BarContainer position="static">
        <Toolbar_1.default>
          
          <IconButton_1.default onClick={async () => await store.drawerStore.togDrawer(drawerOpen)} aria-label="Bahra Drawer">

          <index_1.default />
          </IconButton_1.default>


          
          <style_1.StyledSearch>
              <style_1.StyledSearchIcon />
            <style_1.StyledInput placeholder={t("search...")}/>
          </style_1.StyledSearch>
          <div style={{ flexGrow: 1 }}/>
          <style_1.SectionDesktop>
          
            <IconButton_1.default aria-label="show 17 new notifications" color="inherit">
              <core_1.Badge badgeContent={17} color="secondary">
                <NotificationsNoneRounded_1.default />
              </core_1.Badge>
            </IconButton_1.default>
            <HeaderTop_1.default />
            <IconButton_1.default edge="end" aria-label="account of current user" aria-controls={menuId} aria-haspopup="true" onClick={handleProfileMenuOpen} color="inherit">
              <AccountCircle_1.default />
            </IconButton_1.default>
          </style_1.SectionDesktop>
          <style_1.SectionMobile>
            <HeaderTop_1.default />
            <IconButton_1.default aria-label="show more" aria-controls={mobileMenuId} aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit">
              <MoreVert_1.default />
            </IconButton_1.default>
          </style_1.SectionMobile>
        </Toolbar_1.default>
      </style_1.BarContainer>
      <Menu_1.default />
      {isMobileMenuOpen ? <renderMobileMenu_1.default mobileMoreAnchorEl={mobileMoreAnchorEl} mobileMenuId={mobileMenuId} isMobileMenuOpen={isMobileMenuOpen} handleMobileMenuClose={handleMobileMenuClose} handleProfileMenuOpen={handleProfileMenuOpen}/> : null}
      {isMenuOpen ? <renderMenu_1.default anchorEl={anchorEl} menuId={menuId} isMenuOpen={isMenuOpen} handleMenuClose={handleMenuClose}/> : null}
    
    </div>);
});
exports.default = i18n_1.withTranslation('common')(HeaderNav);
//# sourceMappingURL=HeaderNav.jsx.map