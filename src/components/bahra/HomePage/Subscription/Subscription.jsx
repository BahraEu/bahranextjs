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
/* eslint-disable jsx-a11y/label-has-for */
const react_1 = __importDefault(require("react"));
const react_hooks_1 = require("@apollo/react-hooks");
const formik_1 = require("formik");
const Yup = __importStar(require("yup"));
const lodash_get_1 = __importDefault(require("lodash.get"));
const SUBSCRIBE_graphql_1 = __importDefault(require("./SUBSCRIBE.graphql"));
const SUBSCRIPTIONS_graphql_1 = __importDefault(require("../SubscriptionsTable/SUBSCRIPTIONS.graphql"));
const style_1 = require("./style");
const Typography_1 = require("../../../../styles/Typography");
const i18n_1 = require("../../../../../i18n");
const handleSubsribe = async ({ values, subscribeMutation, resetForm, }) => {
    const subscribeResult = await subscribeMutation({
        variables: {
            input: Object.assign({ source: 'HOME_PAGE' }, values),
        },
    });
    if (lodash_get_1.default(subscribeResult, 'data.subscribe')) {
        resetForm();
    }
    return subscribeResult;
};
const Subscription = (props) => {
    const t = props.t;
    const [subscribeMutation] = react_hooks_1.useMutation(SUBSCRIBE_graphql_1.default, {
        update: (cache, { data }) => {
            const dataResult = cache.readQuery({ query: SUBSCRIPTIONS_graphql_1.default });
            cache.writeQuery({
                query: SUBSCRIPTIONS_graphql_1.default,
                data: {
                    subscriptions: dataResult &&
                        dataResult.subscriptions &&
                        dataResult.subscriptions.concat([data && data.subscribe]),
                },
            });
        },
    });
    const initialValues = {
        email: '',
    };
    return (<>
            <style_1.SubscriptionStyle>
                <style_1.SubscriptionWrapper>
                    <Typography_1.H3>
                        {t('Bahra-news-litter')}
                    </Typography_1.H3>
                    <formik_1.Formik initialValues={initialValues} onSubmit={async (values, { resetForm }) => handleSubsribe({
        values,
        subscribeMutation,
        resetForm,
    })} validationSchema={Yup.object().shape({
        email: Yup.string()
            .email()
            .required('Before submitting you need to provide your email'),
    })}>
                        <formik_1.Form>
                            <style_1.Row>
                                <style_1.Label htmlFor="email">
                                    Email
                                    <style_1.Input id="email" name="email" placeholder="your@email.com" type="email"/>
                                </style_1.Label>
                                <style_1.SubscribeButton type="submit">Submit</style_1.SubscribeButton>
                            </style_1.Row>
                            <style_1.FieldErrorRow>
                                <formik_1.ErrorMessage name="email" component="div"/>
                            </style_1.FieldErrorRow>
                        </formik_1.Form>
                    </formik_1.Formik>
                </style_1.SubscriptionWrapper>
            </style_1.SubscriptionStyle>
        </>);
};
exports.default = i18n_1.withTranslation('common')(Subscription);
//# sourceMappingURL=Subscription.jsx.map