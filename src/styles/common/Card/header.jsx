"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const title_1 = __importDefault(require("./title"));
const styled_1 = require("./styled");
const Header = (props) => {
    const { title, icon, actions } = props;
    // const isShowed = !!(title || icon || actions);
    return (<styled_1.HeaderContainer>
        <styled_1.TitleContent>
            <styled_1.Icon>{icon}</styled_1.Icon>
          <title_1.default>{title}</title_1.default>
        </styled_1.TitleContent>
        {actions}
      </styled_1.HeaderContainer>);
};
Header.propTypes = {
    title: prop_types_1.default.node,
    icon: prop_types_1.default.node,
    actions: prop_types_1.default.node,
};
Header.defaultProps = {
    title: undefined,
    icon: undefined,
    actions: undefined,
};
exports.default = Header;
//# sourceMappingURL=header.jsx.map