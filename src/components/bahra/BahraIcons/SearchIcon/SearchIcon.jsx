"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const mobx_react_lite_1 = require("mobx-react-lite");
const style_1 = require("./style");
const SearchIcon = mobx_react_lite_1.observer(() => {
    // const [expanded,setExpanded]=useState(false)
    return (<>
        <style_1.StyledSearch>
        <style_1.StyledSearchIcon>
          <SearchIcon />
        </style_1.StyledSearchIcon>
        <style_1.StyledInput placeholder="Search…" inputProps={{ 'aria-label': 'search' }}/>
      </style_1.StyledSearch>

        </>);
});
exports.default = SearchIcon;
//# sourceMappingURL=SearchIcon.jsx.map