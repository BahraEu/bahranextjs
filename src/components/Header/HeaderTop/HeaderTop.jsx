"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const i18n_1 = require("../../../../i18n");
const TranslationPicker_1 = __importDefault(require("../../../services/i18n/TranslationPicker"));
const theme_1 = __importDefault(require("../../../styles/theme"));
const HeaderTopWrapper = theme_1.default.div `
    height: 2.6em;
    width: 4em;
    border: 0.4px solid ${props => props.theme.bg.secondary};
    align-self: center;
    display: flex;
    z-index: 10;
    justify-content: center;
    align-item: center;
    border-radius: 0.4rem;
    display: flex;
    margin: 0 auto;
    :hover {
        background: ${props => props.theme.bg.inset};
        color: ${props => props.theme.bg.inset};
    }
`;
const TranslationPickerStyled = theme_1.default(TranslationPicker_1.default) `
    position: absolute;
    @media screen and (max-width: ${props => props.theme.breakpoint}) {
        right: 10px;
    }
`;
const Header = props => {
    return (<HeaderTopWrapper>
            <TranslationPickerStyled currentLanguage={props.currentLanguage}/>
        </HeaderTopWrapper>);
};
exports.default = i18n_1.withTranslation('common')(Header);
//# sourceMappingURL=HeaderTop.jsx.map