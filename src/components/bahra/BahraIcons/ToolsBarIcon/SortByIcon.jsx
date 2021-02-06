"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledIconSortBy = void 0;
const react_1 = __importDefault(require("react"));
const i18n_1 = require("../../../../../i18n");
const styles_1 = require("./styles");
const StyledIconSortBy = (props) => {
    console.log(props);
    const t = props.t;
    return (<>
                    <styles_1.SortByAlphaStyledIcon />
                        <styles_1.Label>
                            {t('SortBy')}
                  </styles_1.Label>
                </>);
};
exports.StyledIconSortBy = StyledIconSortBy;
exports.default = i18n_1.withTranslation('common')(exports.StyledIconSortBy);
//# sourceMappingURL=SortByIcon.jsx.map