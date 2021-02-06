"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@material-ui/core");
const react_1 = __importDefault(require("react"));
const styles_1 = require("../../Layouts/main-Layout/MainToolsBar/ToolBarMenu/styles");
const RenderMenu = (props) => {
    const { anchorEl, menuId, isMenuOpen, handleMenuClose, } = props;
    return (<>
         <styles_1.StyledMenu anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={menuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMenuOpen} onClose={handleMenuClose}>
            <core_1.MenuItem onClick={handleMenuClose}>Profile</core_1.MenuItem>
            <core_1.MenuItem onClick={handleMenuClose}>My account</core_1.MenuItem>
          </styles_1.StyledMenu>
          </>);
};
exports.default = RenderMenu;
//# sourceMappingURL=renderMenu.jsx.map