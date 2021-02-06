"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledIconFilter = void 0;
const i18n_1 = require("../../../../../i18n");
const react_1 = __importDefault(require("react"));
const styles_1 = require("./styles");
const StyledIconFilter = (props) => {
    // console.log(props)
    const t = props.t;
    return (<>
                    <styles_1.FilterListStyledIcon />
                        <styles_1.Label>
                                {t('Filter')}
                        </styles_1.Label>
                </>);
};
exports.StyledIconFilter = StyledIconFilter;
exports.default = i18n_1.withTranslation('common')(exports.StyledIconFilter);
//# sourceMappingURL=FilterIcon.jsx.map