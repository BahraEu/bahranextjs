"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ListItemIcon_1 = __importDefault(require("@material-ui/core/ListItemIcon"));
const ListItemText_1 = __importDefault(require("@material-ui/core/ListItemText"));
const MoveToInbox_1 = __importDefault(require("@material-ui/icons/MoveToInbox"));
const Drafts_1 = __importDefault(require("@material-ui/icons/Drafts"));
const Send_1 = __importDefault(require("@material-ui/icons/Send"));
const styles_1 = require("./styles");
const ToolBarMenu = () => {
    const [anchorEl, setAnchorEl] = react_1.default.useState(null);
    // const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    //   setAnchorEl(event.currentTarget);
    // };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (<div>
      <styles_1.StyledMenu id="customized-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <styles_1.StyledToolBarMenuItem>
          <ListItemIcon_1.default>
            <Send_1.default fontSize="small"/>
          </ListItemIcon_1.default>
          <ListItemText_1.default primary="Sent mail"/>
        </styles_1.StyledToolBarMenuItem>
        <styles_1.StyledToolBarMenuItem>
          <ListItemIcon_1.default>
            <Drafts_1.default fontSize="small"/>
          </ListItemIcon_1.default>
          <ListItemText_1.default primary="Drafts"/>
        </styles_1.StyledToolBarMenuItem>
        <styles_1.StyledToolBarMenuItem>
          <ListItemIcon_1.default>
            <MoveToInbox_1.default fontSize="small"/>
          </ListItemIcon_1.default>
          <ListItemText_1.default primary="Inbox"/>
        </styles_1.StyledToolBarMenuItem>
      </styles_1.StyledMenu>
    </div>);
};
exports.default = ToolBarMenu;
//# sourceMappingURL=ToolBarMenu.jsx.map