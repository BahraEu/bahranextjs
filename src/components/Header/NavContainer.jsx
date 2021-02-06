"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const HeaderNav_1 = __importDefault(require("./HeaderNav/HeaderNav"));
class NavContainer extends react_1.default.Component {
    render() {
        const props = this.props;
        return (<>
                <div>
                    <HeaderNav_1.default currentUrl={props.currentUrl} currentLanguage={props.currentLanguage} activeRoute={props.activeRoute} activePath={props.activePath} user={props.user}/>
                    
                </div>
            </>);
    }
}
NavContainer.defaultProps = {
    me: null,
};
exports.default = NavContainer;
//# sourceMappingURL=NavContainer.jsx.map