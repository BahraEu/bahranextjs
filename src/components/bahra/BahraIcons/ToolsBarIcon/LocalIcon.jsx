"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledIconLocal = void 0;
const i18n_1 = require("../../../../../i18n");
const react_1 = __importDefault(require("react"));
const styles_1 = require("./styles");
const StyledIconLocal = (props) => {
    console.log(props);
    const t = props.t;
    return (<>
                    <styles_1.LocalOfferStyledIcon />
                <styles_1.Label>
                {t('Local')}
                  </styles_1.Label>  
                </>);
};
exports.StyledIconLocal = StyledIconLocal;
exports.default = i18n_1.withTranslation('common')(exports.StyledIconLocal);
//# sourceMappingURL=LocalIcon.jsx.map