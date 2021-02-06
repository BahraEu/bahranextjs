"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const i18n_1 = require("../../../../../i18n");
const react_1 = __importDefault(require("react"));
const styles_1 = require("./styles");
const StyledIconTags = (props) => {
    console.log(props);
    const t = props.t;
    return (<>
                    <styles_1.LocalOfferStyledIcon />
                        <styles_1.Label>
                       {t('Tags')}
                        </styles_1.Label>
                  </>);
};
exports.default = i18n_1.withTranslation('common')(StyledIconTags);
//# sourceMappingURL=TagsIcon.jsx.map