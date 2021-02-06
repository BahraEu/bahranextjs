"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const lodash_get_1 = __importDefault(require("lodash.get"));
const v1_1 = __importDefault(require("uuid/v1"));
const react_hooks_1 = require("@apollo/react-hooks");
const SUBSCRIPTIONS_graphql_1 = __importDefault(require("./SUBSCRIPTIONS.graphql"));
const style_1 = require("./style");
const SubscriptionsTable = () => {
    const { data, loading, error } = react_hooks_1.useQuery(SUBSCRIPTIONS_graphql_1.default);
    if (loading)
        return <>Loading...</>;
    if (error)
        return <>{`Error! ${error.message}`}</>;
    return (<style_1.SubscriptionTable>
            <table>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Source</th>
                    </tr>
                </thead>
                <tbody>
                    {data &&
        data.subscriptions &&
        data.subscriptions.map(subscription => (<tr key={lodash_get_1.default(subscription, 'id', v1_1.default())}>
                                <td>{lodash_get_1.default(subscription, 'email')}</td>
                                <td>{lodash_get_1.default(subscription, 'source')}</td>
                            </tr>))}
                </tbody>
            </table>
        </style_1.SubscriptionTable>);
};
exports.default = SubscriptionsTable;
//# sourceMappingURL=SubscriptionsTable.jsx.map