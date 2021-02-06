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
const Drawer_1 = __importDefault(require("@material-ui/core/Drawer"));
const CssBaseline_1 = __importDefault(require("@material-ui/core/CssBaseline"));
const Divider_1 = __importDefault(require("@material-ui/core/Divider"));
const IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
const ChevronRight_1 = __importDefault(require("@material-ui/icons/ChevronRight"));
const counterStore_1 = require("../../services/stores/counterStore");
const mobx_react_lite_1 = require("mobx-react-lite");
const i18n_1 = require("../../../i18n");
const style_1 = require("./style");
const blogsIcon_1 = __importDefault(require("../bahra/BahraIcons/DrawerIcon/blogsIcon/blogsIcon"));
const artistsIcon_1 = __importDefault(require("../bahra/BahraIcons/DrawerIcon/artistsIcon/artistsIcon"));
const eventsIcon_1 = __importDefault(require("../bahra/BahraIcons/DrawerIcon/eventsIcon/eventsIcon"));
const accountIcon_1 = __importDefault(require("../bahra/BahraIcons/DrawerIcon/accountIcon/accountIcon"));
const shopIcon_1 = __importDefault(require("../bahra/BahraIcons/DrawerIcon/shopIcon/shopIcon"));
const ExitToAppRounded_1 = __importDefault(require("@material-ui/icons/ExitToAppRounded"));
const context_1 = require("../../utilty/context");
const auth_functions_1 = require("../../utilty/auth-functions");
const router_1 = require("next/router");
const core_1 = require("@material-ui/core");
const use_dark_mode_1 = __importDefault(require("use-dark-mode"));
const aboutIcon_1 = __importDefault(require("../bahra/BahraIcons/DrawerIcon/aboutIcon/aboutIcon"));
const style_2 = require("../bahra/BahraIcons/style");
const mobx_1 = require("mobx");
const DrawerC = mobx_react_lite_1.observer(props => {
    const { logOut, logIn } = react_1.useContext(context_1.AuthContext);
    const darkMode = use_dark_mode_1.default(true);
    const store = counterStore_1.useStores();
    const drawerOpen = mobx_1.observable(store.drawerStore.IdrawerOpen);
    // const t = props.t
    const Router = router_1.useRouter();
    const handleChange = () => {
        darkMode.toggle();
    };
    debugger;
    console.log(store);
    return (<div>
            <CssBaseline_1.default />
            <Drawer_1.default variant="persistent" anchor='left' open={store.drawerStore.IdrawerOpen} PaperProps={{ component: style_1.StyledDrawer }}>
           <Divider_1.default />

              <core_1.FormControlLabel labelPlacement='bottom' control={<core_1.Switch checked={darkMode.value} onChange={handleChange} disableRipple={true} color="primary"/>} label="Dark mode"/>          
                <Divider_1.default />

                 <style_2.StyledBahraDrawerIcon disableFocusRipple onClick={async () => await Router.push('/blogs')}>
                <blogsIcon_1.default />
                </style_2.StyledBahraDrawerIcon>



                <style_2.StyledBahraDrawerIcon disableFocusRipple onClick={async () => await Router.push('/account')} aria-label="Shop">
                     <accountIcon_1.default />
                </style_2.StyledBahraDrawerIcon>

  
                <style_2.StyledBahraDrawerIcon disableFocusRipple onClick={async () => await Router.push('/about')} aria-label="About">
                 <aboutIcon_1.default />

                </style_2.StyledBahraDrawerIcon>
                <style_2.StyledBahraDrawerIcon disableFocusRipple onClick={async () => await Router.push('artists')}>
                  <artistsIcon_1.default />

                </style_2.StyledBahraDrawerIcon>


                <style_2.StyledBahraDrawerIcon disableFocusRipple onClick={async () => await Router.push('events')}>

                <eventsIcon_1.default />  
                </style_2.StyledBahraDrawerIcon>
                <style_2.StyledBahraDrawerIcon disableFocusRipple onClick={async () => await Router.push('/shop')} aria-label="Shop">
                     <shopIcon_1.default />  
                </style_2.StyledBahraDrawerIcon>
              
                <Divider_1.default />
       
                
                <div>
                    {!auth_functions_1.isEmpty(props.user) ?
        <IconButton_1.default onClick={() => logOut(props.user)}>
                            <ExitToAppRounded_1.default />
                        </IconButton_1.default>
        : <IconButton_1.default onClick={() => logIn(props.user)}>
                            <ExitToAppRounded_1.default />
                        </IconButton_1.default>}
                    <IconButton_1.default onClick={() => store.drawerStore.togDrawer(drawerOpen)}>
                        <ChevronRight_1.default />
                    </IconButton_1.default>
                </div>
            </Drawer_1.default>
        </div>);
});
exports.default = i18n_1.withTranslation('common')(DrawerC);
//# sourceMappingURL=drawer.jsx.map