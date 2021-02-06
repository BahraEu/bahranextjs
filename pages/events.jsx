"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const i18n_1 = require("../i18n");
const withData_1 = __importDefault(require("../src/services/apollo/withData"));
const prop_types_1 = __importDefault(require("prop-types"));
const react_apollo_1 = require("react-apollo");
const routes_1 = require("../src/services/routes/routes");
// import Maps from '../src/components/bahra/MuComponents/Maps/Maps'
const wp_query_event_1 = require("../src/graphql/queries/wp-query-event");
const mainLayout_1 = __importDefault(require("../src/components/Layouts/main-Layout/mainLayout"));
const eventList_1 = __importDefault(require("../src/components/bahra/Events/eventList"));
const spinner_1 = __importDefault(require("../src/styles/spinner/spinner"));
const helpers_1 = require("../src/utilty/helpers");
// import Loader from '../src/components/Header/HeaderTop/Loader';
const EventsPage = ({ t, currentUrl, currentLanguage, Children }) => {
    const { loading, error, data } = react_apollo_1.useQuery(wp_query_event_1.GetFirstLevelEvents, {
        notifyOnNetworkStatusChange: true,
    });
    if (loading)
        return <spinner_1.default />;
    if (error)
        return `Error! ${error.message}`;
    if (data) {
        let eventsItems = data.events.items;
        debugger;
        return (<>
                <mainLayout_1.default {...Children} currentUrl={currentUrl} currentLanguage={currentLanguage} events={eventsItems}> 
                    <routes_1.Link href="/">
                        <button type="button">{t('Hello')}</button>
                    </routes_1.Link>
                    <eventList_1.default events={eventsItems} currentUrl={currentUrl} currentLanguage={currentLanguage}/>
                    

                </mainLayout_1.default>
            </>);
    }
};
EventsPage.getInitialProps = async (pageProps) => {
    const currentUrl = helpers_1.isServer ? await pageProps.req.path : '/events';
    const currentLanguage = helpers_1.isServer ? await pageProps.req.language : i18n_1.i18n.language;
    return {
        namespacesRequired: ['common'],
        namespaces: 'common',
        t: undefined,
        currentLanguage,
        currentUrl,
    };
};
EventsPage.propTypes = {
    t: prop_types_1.default.func.isRequired,
    language: prop_types_1.default.string.isRequired,
};
exports.default = withData_1.default(i18n_1.withTranslation('common')(EventsPage));
//# sourceMappingURL=events.jsx.map