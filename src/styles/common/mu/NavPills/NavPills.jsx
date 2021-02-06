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
const react_swipeable_views_1 = __importDefault(require("react-swipeable-views"));
// @material-ui/core components
const styles_1 = require("@material-ui/core/styles");
const Tabs_1 = __importDefault(require("@material-ui/core/Tabs"));
const Tab_1 = __importDefault(require("@material-ui/core/Tab"));
// core components
const GridContainer_1 = __importDefault(require("../../Grid/GridContainer"));
const GridItem_1 = __importDefault(require("../../Grid/GridItem"));
const navPillsStyle_1 = __importDefault(require("./navPillsStyle"));
const useStyles = styles_1.makeStyles(navPillsStyle_1.default);
function NavPills(props) {
    const [active, setActive] = react_1.default.useState(props.active);
    const handleChange = (_, active) => {
        setActive(active);
    };
    const handleChangeIndex = index => {
        setActive(index);
    };
    const classes = useStyles();
    const { tabs, direction, color, horizontal, alignCenter } = props;
    const flexContainerClasses = classnames_1.default({
        [classes.flexContainer]: true,
        [classes.horizontalDisplay]: horizontal !== undefined
    });
    const tabButtons = (<Tabs_1.default classes={{
        root: classes.root,
        fixed: classes.fixed,
        flexContainer: flexContainerClasses,
        indicator: classes.displayNone
    }} value={active} onChange={handleChange} centered={alignCenter}>
      {tabs.map((prop, key) => {
        var icon = {};
        if (prop.tabIcon !== undefined) {
            icon["icon"] = <prop.tabIcon className={classes.tabIcon}/>;
        }
        const pillsClasses = classnames_1.default({
            [classes.pills]: true,
            [classes.horizontalPills]: horizontal !== undefined,
            [classes.pillsWithIcons]: prop.tabIcon !== undefined
        });
        return (<Tab_1.default label={prop.tabButton} key={key} {...icon} classes={{
            root: pillsClasses,
            selected: classes[color],
            wrapper: classes.tabWrapper
        }}/>);
    })}
    </Tabs_1.default>);
    const tabContent = (<div className={classes.contentWrapper}>
      <react_swipeable_views_1.default axis={direction === "rtl" ? "x-reverse" : "x"} index={active} onChangeIndex={handleChangeIndex}>
        {tabs.map((prop, key) => {
        return (<div className={classes.tabContent} key={key}>
              {prop.tabContent}
            </div>);
    })}
      </react_swipeable_views_1.default>
    </div>);
    return horizontal !== undefined ? (<GridContainer_1.default>
      <GridItem_1.default {...horizontal.tabsGrid}>{tabButtons}</GridItem_1.default>
      <GridItem_1.default {...horizontal.contentGrid}>{tabContent}</GridItem_1.default>
    </GridContainer_1.default>) : (<div>
      {tabButtons}
      {tabContent}
    </div>);
}
exports.default = NavPills;
NavPills.defaultProps = {
    active: 0,
    color: "primary"
};
NavPills.propTypes = {
    // index of the default active pill
    active: prop_types_1.default.number,
    tabs: prop_types_1.default.arrayOf(prop_types_1.default.shape({
        tabButton: prop_types_1.default.string,
        tabIcon: prop_types_1.default.object,
        tabContent: prop_types_1.default.node
    })).isRequired,
    color: prop_types_1.default.oneOf([
        "primary",
        "warning",
        "danger",
        "success",
        "info",
        "rose"
    ]),
    direction: prop_types_1.default.string,
    horizontal: prop_types_1.default.shape({
        tabsGrid: prop_types_1.default.object,
        contentGrid: prop_types_1.default.object
    }),
    alignCenter: prop_types_1.default.bool
};
//# sourceMappingURL=NavPills.jsx.map