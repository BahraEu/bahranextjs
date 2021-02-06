"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const style_1 = require("./style");
const counterStore_1 = require("../../../services/stores/counterStore");
const mobx_react_lite_1 = require("mobx-react-lite");
const index_1 = __importDefault(require("../../../components/bahra/BahraIcons/LogoIcon/index"));
// import CheckoutIcon from '../../../components/bahra/BahraIcons/checkoutIcon/checkoutIcon';
const core_1 = require("@material-ui/core");
const ArrowBack_1 = __importDefault(require("@material-ui/icons/ArrowBack"));
const AccountCircle_1 = __importDefault(require("@material-ui/icons/AccountCircle"));
const mobx_1 = require("mobx");
const MobileNavContainer = mobx_react_lite_1.observer(props => {
    const store = counterStore_1.useStores();
    // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = react_1.default.useState(null);
    //  const menuId = 'primary-search-account-menu';
    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const { currentUrl } = props;
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const [anchorEl, setAnchorEl] = react_1.default.useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };
    // const handleMenuClose = () => {
    //   setAnchorEl(null);
    //   handleMobileMenuClose();
    // };
    console.log(mobileMoreAnchorEl, anchorEl);
    const drawerOpen = mobx_1.observable(store.drawerStore.IdrawerOpen);
    const renderMobileMenu = (<core_1.Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
          
          <core_1.MenuItem onClick={handleProfileMenuOpen}>
            {props.user ?
        <core_1.Avatar src={props.user.avatar.url}>{props.user.username} </core_1.Avatar>
        :
            <core_1.IconButton aria-label="account of current user" aria-controls="primary-search-account-menu" aria-haspopup="true" color="inherit">
                        <AccountCircle_1.default />
                      </core_1.IconButton>}
            <p>Profile</p>
          </core_1.MenuItem>
        </core_1.Menu>);
    return (<>
            <style_1.MobileContainer>
                <style_1.StyledMenuItem>
                    {currentUrl && !currentUrl.includes('/home') ?
        <ArrowBack_1.default /> : null}    
                        
                </style_1.StyledMenuItem>
                <style_1.LogoContainer onClick={async () => await store.drawerStore.togDrawer(drawerOpen)} aria-label="Bahra Drawer">
               
                <index_1.default />
                </style_1.LogoContainer>

           
                    <style_1.StyledMenuItem>
                        <core_1.IconButton aria-label="show more" aria-controls={mobileMenuId} aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit">
                          
                        <AccountCircle_1.default />
                        </core_1.IconButton>
                     </style_1.StyledMenuItem> 

                     

                     {renderMobileMenu}
            </style_1.MobileContainer>
        </>);
});
exports.default = MobileNavContainer;
//# sourceMappingURL=mobileNav.jsx.map