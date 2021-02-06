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
const React = __importStar(require("react"));
const i18n_1 = require("../i18n");
const prop_types_1 = __importDefault(require("prop-types"));
const routes_1 = require("../src/services/routes/routes");
const withData_1 = __importDefault(require("../src/services/apollo/withData"));
const wp_query_event_1 = require("../src/graphql/queries/wp-query-event");
const mainLayout_1 = __importDefault(require("../src/components/Layouts/main-Layout/mainLayout"));
const singleEvent_1 = __importDefault(require("../src/components/bahra/Events/singleEvent"));
const helpers_1 = require("../src/utilty/helpers");
const Event = ({ t, currentUrl, currentLanguage, childeren, eventsItem }) => {
    debugger;
    return (<>
            <mainLayout_1.default {...childeren} currentUrl={currentUrl} currentLanguage={currentLanguage}>
                <routes_1.Link href="/">
                    <button type="button">{t('Hello')}</button>
                </routes_1.Link>
                <singleEvent_1.default event={eventsItem} currentUrl={currentUrl} currentLanguage={currentLanguage}/>
            </mainLayout_1.default>
        </>);
};
Event.displayName = 'event';
Event.getInitialProps = async function (context) {
    const currentUrl = helpers_1.isServer ? await context.req.path : '/event';
    const currentLanguage = helpers_1.isServer ? await context.req.language : i18n_1.i18n.language;
    let { query: { slug }, } = context;
    const id = slug ? parseInt(slug.split('-').pop()) : context.query.id;
    const res = await context.apolloClient.query({
        query: wp_query_event_1.GET_EVENT_BIJ_ID,
        variables: { id },
    });
    return {
        eventsItem: res.data.eventBy,
        namespacesRequired: 'common',
        t: undefined,
        currentLanguage,
        currentUrl,
    };
};
Event.propTypes = {
    t: prop_types_1.default.func.isRequired,
    language: prop_types_1.default.string.isRequired,
};
exports.default = withData_1.default(i18n_1.withTranslation('common')(Event));
//# sourceMappingURL=event.jsx.map