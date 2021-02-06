"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(require("prop-types"));
const react_apollo_1 = require("react-apollo");
const formik_1 = require("formik");
const blankLayout_1 = __importDefault(require("../src/components/Layouts/blankLayout/blankLayout"));
const Typography_1 = require("../src/styles/Typography");
const helpers_1 = require("../src/utilty/helpers");
const react_1 = __importDefault(require("react"));
const i18n_1 = require("../i18n");
const style_1 = require("../src/components/bahra/Form/style");
const routes_1 = require("../src/services/routes/routes");
const i18n_2 = require("../i18n");
const wp_mutation_1 = require("../src/graphql/mutations/wp-mutation");
const ForgetPasswordForm_1 = __importDefault(require("../src/components/bahra/Form/ForgetPasswordForm"));
const auth_functions_1 = require("../src/utilty/auth-functions");
const router_1 = require("next/router");
const ForgetPassword = ({ currentUrl, currentLanguage, t }) => {
    const client = react_apollo_1.useApolloClient();
    const Router = router_1.useRouter();
    const onCompleted = data => {
        if (!auth_functions_1.isEmpty(data)) {
            console.log('ForgetPassword', data);
        }
        else {
            console.log('wrong');
        }
        client.cache.reset().then(() => {
            Router.push('/reset_password');
        });
    };
    const onError = error => {
        // If you want to send error to external service?
        console.error('loginError', error);
    };
    const [sendPasswordReset, { error }] = react_apollo_1.useMutation(wp_mutation_1.SendPasswordReset, {
        onCompleted,
        onError,
    });
    return (<blankLayout_1.default currentUrl={currentUrl} currentLanguage={currentLanguage}>
       <style_1.LogInWrapper>

          <Typography_1.H2 className="mb-2">{t('Forget Password')}</Typography_1.H2>
          <formik_1.Formik initialValues={{ username: '' }} 
    // validationSchema={loginSchema}
    onSubmit={async (values, { setSubmitting }) => {
        await sendPasswordReset({
            variables: values,
        });
        setSubmitting(false);
    }}>
              {({ isSubmitting }) => (<ForgetPasswordForm_1.default isSubmitting={isSubmitting} currentUrl={currentUrl} currentLanguage={currentLanguage} {...error}/>)}
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
ForgetPassword.getInitialProps = async (pageProps) => {
    const currentLanguage = helpers_1.isServer ? pageProps.req.language : localStorage.getItem('language') || i18n_2.i18n.langu;
    const currentUrl = helpers_1.isServer ? pageProps.req.pathName || pageProps.req.path : '';
    return {
        namespacesRequired: ['common'],
        namespaces: 'common',
        t: undefined,
        currentUrl,
        currentLanguage,
    };
};
ForgetPassword.propTypes = {
    t: prop_types_1.default.func.isRequired,
    currentLanguage: prop_types_1.default.string.isRequired,
};
exports.default = i18n_1.withTranslation('common')(ForgetPassword);
//# sourceMappingURL=forgetPassword.jsx.map