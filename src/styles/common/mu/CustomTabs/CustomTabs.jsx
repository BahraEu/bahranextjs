"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// nodejs library that concatenates classes
const classnames_1 = __importDefault(require("classnames"));
// nodejs library to set properties for components
const prop_types_1 = __importDefault(require("prop-types"));
// material-ui components
const styles_1 = require("@material-ui/core/styles");
const Tabs_1 = __importDefault(require("@material-ui/core/Tabs"));
const Tab_1 = __importDefault(require("@material-ui/core/Tab"));
// core components
const Card_1 = __importDefault(require("../../Card/Card"));
const CardHeader_1 = __importDefault(require("../../Card/CardHeader"));
const customTabsStyle_1 = __importDefault(require("./customTabsStyle"));
const CardBody_1 = __importDefault(require("../../Card/CardBody"));
const useStyles = styles_1.makeStyles(customTabsStyle_1.default);
function CustomTabs(props) {
    const [value, setValue] = react_1.default.useState(0);
    const handleChange = (_, value) => {
        setValue(value);
    };
    const classes = useStyles();
    const { plainTabs, tabs, title, rtlActive } = props;
    const cardTitle = classnames_1.default({
        [classes.cardTitle]: true,
        [classes.cardTitleRTL]: rtlActive
    });
    return (<Card_1.default plain={plainTabs}>
      <CardHeader_1.default plain={plainTabs}>
        {title !== undefined ? <div className={cardTitle}>{title}</div> : null}
        <Tabs_1.default value={value} onChange={handleChange} classes={{
        root: classes.tabsRoot,
        indicator: classes.displayNone,
        scrollButtons: classes.displayNone
    }} variant="scrollable" scrollButtons="auto">
          {tabs.map((prop, key) => {
        var icon = {};
        if (prop.tabIcon) {
            icon = {
                icon: <prop.tabIcon />
            };
        }
        return (<Tab_1.default classes={{
            root: classes.tabRootButton,
            selected: classes.tabSelected,
            wrapper: classes.tabWrapper
        }} key={key} label={prop.tabName} {...icon}/>);
    })}
        </Tabs_1.default>
      </CardHeader_1.default>
      <CardBody_1.default>
        {tabs.map((prop, key) => {
        if (key === value) {
            return <div key={key}>{prop.tabContent}</div>;
        }
        return null;
    })}
      </CardBody_1.default>
    </Card_1.default>);
}
exports.default = CustomTabs;
CustomTabs.propTypes = {
    headerColor: prop_types_1.default.oneOf([
        "warning",
        "success",
        "danger",
        "info",
        "primary",
        "rose"
    ]),
    title: prop_types_1.default.string,
    tabs: prop_types_1.default.arrayOf(prop_types_1.default.shape({
        tabName: prop_types_1.default.string.isRequired,
        tabIcon: prop_types_1.default.object,
        tabContent: prop_types_1.default.node.isRequired
    })),
    rtlActive: prop_types_1.default.bool,
    plainTabs: prop_types_1.default.bool
};
//# sourceMappingURL=CustomTabs.jsx.map