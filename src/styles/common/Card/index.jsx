"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const header_1 = __importDefault(require("./header"));
const body_1 = __importDefault(require("./body"));
const styled_1 = require("./styled");
const Card = (props) => {
    const { title, icon, actions, footer, isLoading, children, style } = props;
    // const showFooter = !!(footer && !isLoading);
    return (<styled_1.Container style={style}>
      <header_1.default title={title} icon={icon} actions={actions}/>
      <body_1.default isLoading={isLoading}>{children}</body_1.default>
        <styled_1.Footer>{footer}</styled_1.Footer>
    </styled_1.Container>);
};
Card.propTypes = {
    title: prop_types_1.default.node,
    icon: prop_types_1.default.node,
    actions: prop_types_1.default.node,
    footer: prop_types_1.default.node,
    isLoading: prop_types_1.default.bool,
    children: prop_types_1.default.node,
    style: prop_types_1.default.object,
};
Card.defaultProps = {
    title: null,
    icon: null,
    actions: null,
    footer: null,
    isLoading: false,
    children: null,
    style: undefined,
};
exports.default = Card;
//# sourceMappingURL=index.jsx.map