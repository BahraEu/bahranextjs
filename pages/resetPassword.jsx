"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const wp_mutation_1 = require("../src/graphql/mutations/wp-mutation");
const prop_types_1 = __importDefault(require("prop-types"));
const react_apollo_1 = require("react-apollo");
const formik_1 = require("formik");
const blankLayout_1 = __importDefault(require("../src/components/Layouts/blankLayout/blankLayout"));
const ResetPasswordForm_1 = __importDefault(require("../src/components/bahra/Form/ResetPasswordForm"));
const Typography_1 = require("../src/styles/Typography");
// import { loginSchema } from '../src/components/bahra/Auth/schema';
const helpers_1 = require("../src/utilty/helpers");
const react_1 = __importStar(require("react"));
const context_1 = require("../src/utilty/context");
const lodash_1 = require("lodash");
const i18n_1 = require("../i18n");
const style_1 = require("../src/components/bahra/Form/style");
const routes_1 = require("../src/services/routes/routes");
const ResetPassword = ({ currentUrl, currentLanguage, t }) => {
    const client = react_apollo_1.useApolloClient();
    const { logIn } = react_1.useContext(context_1.AuthContext);
    const onCompleted = data => {
        const user = data.login.user;
        if (!lodash_1.isEmpty(user)) {
            logIn(user);
        }
        else {
            console.log('wrong');
        }
        client.cache.reset().then(() => {
            helpers_1.redirect({ user }, '/account');
        });
    };
    const onError = error => {
        // If you want to send error to external service?
        console.error('loginError', error);
    };
    const [resetUserPassword, { error }] = react_apollo_1.useMutation(wp_mutation_1.ResetUserPassword, {
        onCompleted,
        onError,
    });
    return (<blankLayout_1.default currentLanguage={i18n_1.i18n.language}>
         <style_1.LogInWrapper>

          <Typography_1.H2 className="mb-2">{t('Rest Password')}</Typography_1.H2>
          <formik_1.Formik initialValues={{ username: '', password: '' }} 
    //   validationSchema={loginSchema}
    onSubmit={async (values, { setSubmitting }) => {
        await resetUserPassword({
            variables: values,
        });
        setSubmitting(false);
    }}>
              {({ isSubmitting }) => (<ResetPasswordForm_1.default isSubmitting={isSubmitting} currentUrl={currentUrl} currentLanguage={currentLanguage} {...error}/>)}
                </formik_1.Formik>
                <div>
          <Typography_1.H3>New to BAHRA?</Typography_1.H3>
          <routes_1.Link href='./signup'>
            <Typography_1.H1>Register</Typography_1.H1>
          </routes_1.Link>
          <routes_1.Link href='./signup'>
            <Typography_1.H1>Forget Password</Typography_1.H1>
          </routes_1.Link>
          </div>
          </style_1.LogInWrapper>

      </blankLayout_1.default>);
};
ResetPassword.getInitialProps = async (pageProps) => {
    const currentLanguage = helpers_1.isServer ? pageProps.req.language : localStorage.getItem('language');
    const currentUrl = helpers_1.isServer ? pageProps.req.pathName || pageProps.req.path : '';
    console.log('apolloClient', pageProps.apolloClient);
    return {
        namespacesRequired: ['common'],
        namespaces: 'common',
        t: undefined,
        currentUrl,
        currentLanguage,
    };
};
ResetPassword.propTypes = {
    t: prop_types_1.default.func.isRequired,
    currentLanguage: prop_types_1.default.string.isRequired,
};
exports.default = i18n_1.withTranslation('common')(ResetPassword);
// const Container1 = styled.View`
//   background-color: ${(props) => props.theme.bg.inset2};
// `;
//# sourceMappingURL=resetPassword.jsx.map