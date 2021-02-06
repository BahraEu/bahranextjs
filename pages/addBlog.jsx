"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const i18n_1 = require("../i18n");
const prop_types_1 = __importDefault(require("prop-types"));
const react_apollo_1 = require("react-apollo");
const formik_1 = require("formik");
const blankLayout_1 = __importDefault(require("../src/components/Layouts/blankLayout/blankLayout"));
const addBlogForm_1 = __importDefault(require("../src/components/bahra/Form/addBlogForm"));
const Typography_1 = require("../src/styles/Typography");
const helpers_1 = require("../src/utilty/helpers");
const wp_mutation_1 = require("../src/graphql/mutations/wp-mutation");
const react_1 = require("react");
const context_1 = require("../src/utilty/context");
const auth_functions_1 = require("../src/utilty/auth-functions");
const config_1 = __importDefault(require("config/config"));
const parseCookies_1 = __importDefault(require("@utilty/parseCookies"));
const AddBlog = ({ t, currentUrl, currentLanguage }) => {
    const client = react_apollo_1.useApolloClient();
    const { signUp } = react_1.useContext(context_1.AuthContext);
    const onCompleted = data => {
        const user = data.login.user;
        if (!auth_functions_1.isEmpty(user)) {
            signUp(user);
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
        console.error('error', error);
    };
    const [signUpAction, error] = react_apollo_1.useMutation(wp_mutation_1.CREATE_BLOG, {
        onCompleted,
        onError,
    });
    debugger;
    console.log(error);
    return (<>
            <blankLayout_1.default currentUrl={currentUrl} currentLanguage={currentLanguage}>
                <Typography_1.H2 className="mb-2">{t('signup')}</Typography_1.H2>
                <formik_1.Formik initialValues={{ title: '', content: '', excerpt: '', slug: '' }} 
    // validationSchema={registerUserSchema}
    onSubmit={async (values, { setSubmitting }) => {
        await signUpAction({
            variables: values,
        });
        setSubmitting(false);
    }}>
                    {({ isSubmitting }) => (<addBlogForm_1.default isSubmitting={isSubmitting} currentUrl={currentUrl} currentLanguage={currentLanguage} {...error}/>)}
                </formik_1.Formik>
            </blankLayout_1.default>
        </>);
};
AddBlog.getInitialProps = async (context) => {
    const currentLanguage = helpers_1.isServer ? context.req.language : i18n_1.i18n.language;
    const currentUrl = helpers_1.isServer ? context.req.path : '/addBlog';
    const userID = helpers_1.isServer
        ? parseCookies_1.default(context.req).userID
        : localStorage.getItem(config_1.default.userID);
    return {
        namespacesRequired: ['common'],
        namespaces: 'common',
        t: undefined,
        currentUrl,
        currentLanguage,
        userID
    };
};
AddBlog.propTypes = {
    t: prop_types_1.default.func.isRequired,
    currentLanguage: prop_types_1.default.string.isRequired,
};
exports.default = i18n_1.withTranslation('common')(AddBlog);
//# sourceMappingURL=addBlog.jsx.map