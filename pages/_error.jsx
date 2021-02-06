"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const i18n_1 = require("../i18n");
const Error = ({ statusCode, t }) => (<p>{statusCode ? t('error-with-status', { statusCode }) : t('error-without-status')}</p>);
Error.getInitialProps = async ({ res, err }) => {
    let statusCode = null;
    if (res) {
        ({ statusCode } = res);
    }
    else if (err) {
        ({ statusCode } = err);
    }
    return {
        namespacesRequired: ['common'],
        statusCode,
    };
};
Error.defaultProps = {
    statusCode: null,
};
Error.propTypes = {
    statusCode: prop_types_1.default.number,
    t: prop_types_1.default.func.isRequired,
};
exports.default = i18n_1.withTranslation(['common'])(Error);
//# sourceMappingURL=_error.jsx.map