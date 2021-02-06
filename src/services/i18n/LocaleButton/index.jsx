"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocaleButton = void 0;
const react_1 = __importDefault(require("react"));
const theme_1 = __importDefault(require("../../../styles/theme"));
const utilty_1 = require("../../../utilty");
const Container = theme_1.default.button `
    .active {
        color: ${props => utilty_1.hexa(props.theme.bg.secondary, 0.8)}
`;
const LocaleButton = ({ lang, isActive, onClick }) => {
    return (<Container className={isActive ? 'active' : ''} onClick={onClick}>
            {lang}
        </Container>);
};
exports.LocaleButton = LocaleButton;
//# sourceMappingURL=index.jsx.map