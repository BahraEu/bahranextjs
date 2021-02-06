"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@material-ui/core");
const AccountCircle_1 = __importDefault(require("@material-ui/icons/AccountCircle"));
const react_1 = __importDefault(require("react"));
const RenderMobileMenu = (props) => {
    const { mobileMoreAnchorEl, mobileMenuId, isMobileMenuOpen, handleMobileMenuClose, handleProfileMenuOpen, user } = props;
    return (<core_1.Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
            <core_1.MenuItem onClick={handleProfileMenuOpen}>
              {user ?
        <core_1.Avatar src={props.user.avatar.url} alt={props.user.username}>{props.user.username} </core_1.Avatar>
        :
            <core_1.IconButton aria-label="account of current user" aria-controls="primary-search-account-menu" aria-haspopup="true" color="inherit">
                          <AccountCircle_1.default />
                        </core_1.IconButton>}
              <p>Profile</p>
            </core_1.MenuItem>
          </core_1.Menu>);
};
exports.default = RenderMobileMenu;
//# sourceMappingURL=renderMobileMenu.jsx.map