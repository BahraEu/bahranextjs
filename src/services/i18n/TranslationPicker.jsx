"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloseButton = void 0;
const react_1 = __importDefault(require("react"));
const i18n_1 = require("../../../i18n");
const CloseOnEscape_1 = __importDefault(require("./LocaleButton/CloseOnEscape"));
const LocaleButton_1 = require("./LocaleButton");
const utilty_1 = require("../../utilty");
const theme_1 = __importDefault(require("../../styles/theme"));
const Typography_1 = require("../../styles/Typography");
exports.CloseButton = theme_1.default.div `
  position: relative;
  padding: 0 8px;
  display: ${props => props.visible ? 'block' : 'none'};
  font-size: 26px;
  font-weight: 300;
  cursor: pointer;
  bottom:1.2em;
  right:2.4em;
`;
const PickerButton = theme_1.default.div `
    color: white;
    background:
    transition: background 0.3s, color 0.3s;
    z-index: 0;
    cursor: pointer;
    :hover {
        background: ${props => props.theme.bg.inset[2]};
        color: black;
    }
`;
const Title = theme_1.default.h2 `
    font-size: 1.2rem;
    margin: 0;
    color: ${props => props.theme.bg.secondary};
    white-space: nowrap;
    display:inline-flex;
    align-content:center;
    justify-content:center;
    span {
        color: gray;
        font-size: 0.8em;
    }
`;
const PickerWrapper = theme_1.default.div `
    display: ${props => (props.DropdownOpen ? 'flex' : 'none')};
    z-index: 9;
    justify-content: space-between;
    position: absolute;
    top: 22rem;
    right: 50%;
    border-radius: 0.65rem;
    padding: 2rem 4rem;
    align-self:center;
    background-color: ${props => props.theme.bg.inset};
    :hover {
        background: white;
        color: black;
    }
`;
class TranslationPickerClass extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.wrapperRef = react_1.default.createRef();
        this.state = {
            DropdownOpen: false,
        };
        this.handleClickOutside = (event) => {
            const current = this.wrapperRef.current;
            if (current && !current.contains(event.target)) {
                this.toggleDropdownOpen(false);
            }
        };
        this.toggleDropdownOpen = (DropdownOpen) => {
            this.setState({ DropdownOpen });
        };
    }
    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, false);
        document.addEventListener('touchstart', this.handleClickOutside, false);
    }
    componentWillUnmount() {
        document.addEventListener('click', this.handleClickOutside, false);
        document.addEventListener('touchstart', this.handleClickOutside, false);
    }
    render() {
        const renderLocaleButtons = (activeLanguage) => ['English', 'Arabic'].map(lang => (<LocaleButton_1.LocaleButton key={lang} lang={lang} isActive={activeLanguage === lang} onClick={() => utilty_1.changeLanguage({ lang, currentLanguage })}/>));
        const { currentLanguage } = this.props;
        const { DropdownOpen } = this.state;
        return (<>
                <PickerButton onClick={() => this.toggleDropdownOpen(!DropdownOpen)}>
                    <Title>{i18n_1.i18n.language && i18n_1.i18n.language.split('', 3)}</Title>
                    <CloseOnEscape_1.default onEscape={() => this.toggleDropdownOpen(false)}>
                        <PickerWrapper DropdownOpen={DropdownOpen}>
                            <exports.CloseButton visible={DropdownOpen}>×</exports.CloseButton>

                            <Typography_1.H6>choose your lamguage</Typography_1.H6>
                            {renderLocaleButtons(i18n_1.i18n.language)}
                        </PickerWrapper>
                    </CloseOnEscape_1.default>
                </PickerButton>
            </>);
    }
}
exports.default = i18n_1.withTranslation('common')(TranslationPickerClass);
//# sourceMappingURL=TranslationPicker.jsx.map