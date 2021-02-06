"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_1 = require("@material-ui/core/styles");
const Icon_1 = __importDefault(require("@material-ui/core/Icon"));
const Store_1 = __importDefault(require("@material-ui/icons/Store"));
const Warning_1 = __importDefault(require("@material-ui/icons/Warning"));
const DateRange_1 = __importDefault(require("@material-ui/icons/DateRange"));
const LocalOffer_1 = __importDefault(require("@material-ui/icons/LocalOffer"));
const Update_1 = __importDefault(require("@material-ui/icons/Update"));
const ArrowUpward_1 = __importDefault(require("@material-ui/icons/ArrowUpward"));
const AccessTime_1 = __importDefault(require("@material-ui/icons/AccessTime"));
const Accessibility_1 = __importDefault(require("@material-ui/icons/Accessibility"));
const BugReport_1 = __importDefault(require("@material-ui/icons/BugReport"));
const Code_1 = __importDefault(require("@material-ui/icons/Code"));
const Cloud_1 = __importDefault(require("@material-ui/icons/Cloud"));
// core components
const GridContainer_1 = __importDefault(require("../../../../styles/common/Grid/GridContainer"));
const Table_1 = __importDefault(require("../../../../styles/common/mu/Table/Table"));
const Tasks_1 = __importDefault(require("../../../../styles/common/mu/Tasks/Tasks"));
const CustomTabs_1 = __importDefault(require("../../../../styles/common/mu/CustomTabs/CustomTabs"));
const Card_1 = __importDefault(require("../../../../styles/common/Card/Card"));
const CardHeader_1 = __importDefault(require("../../../../styles/common/Card/CardHeader"));
const CardIcon_1 = __importDefault(require("../../../../styles/common/Card/CardIcon"));
const CardBody_1 = __importDefault(require("../../../../styles/common/Card/CardBody"));
const CardFooter_1 = __importDefault(require("../../../../styles/common/Card/CardFooter"));
// import { bugs, website, server } from "variables/general";
// import {
//   dailySalesChart,
//   emailsSubscriptionChart,
//   completedTasksChart
// } from "variables/charts";
const dashboardStyle_1 = __importDefault(require("./dashboardStyle"));
const core_1 = require("@material-ui/core");
const useStyles = styles_1.makeStyles(dashboardStyle_1.default);
const DashboardComponent = () => {
    const classes = useStyles();
    return (<div>
      <GridContainer_1.default>
        <core_1.Grid xs={12} sm={6} md={3}>
          <Card_1.default>
            <CardHeader_1.default color="warning" stats icon>
              <CardIcon_1.default color="warning">
                <Icon_1.default>content_copy</Icon_1.default>
              </CardIcon_1.default>
              <p className={classes.cardCategory}>Used Space</p>
              <h3 className={classes.cardTitle}>
                49/50 <small>GB</small>
              </h3>
            </CardHeader_1.default>
            <CardFooter_1.default stats>
              <div className={classes.stats}>
                  <Warning_1.default />
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  Get more space
                </a>
              </div>
            </CardFooter_1.default>
          </Card_1.default>
        </core_1.Grid>
        <core_1.Grid xs={12} sm={6} md={3}>
          <Card_1.default>
            <CardHeader_1.default color="success" stats icon>
              <CardIcon_1.default color="success">
                <Store_1.default />
              </CardIcon_1.default>
              <p className={classes.cardCategory}>Revenue</p>
              <h3 className={classes.cardTitle}>$34,245</h3>
            </CardHeader_1.default>
            <CardFooter_1.default stats>
              <div className={classes.stats}>
                <DateRange_1.default />
                Last 24 Hours
              </div>
            </CardFooter_1.default>
          </Card_1.default>
        </core_1.Grid>
        <core_1.Grid xs={12} sm={6} md={3}>
          <Card_1.default>
            <CardHeader_1.default color="danger" stats icon>
              <CardIcon_1.default color="danger">
                <Icon_1.default>info_outline</Icon_1.default>
              </CardIcon_1.default>
              <p className={classes.cardCategory}>Fixed Issues</p>
              <h3 className={classes.cardTitle}>75</h3>
            </CardHeader_1.default>
            <CardFooter_1.default stats>
              <div className={classes.stats}>
                <LocalOffer_1.default />
                Tracked from Github
              </div>
            </CardFooter_1.default>
          </Card_1.default>
        </core_1.Grid>
        <core_1.Grid xs={12} sm={6} md={3}>
          <Card_1.default>
            <CardHeader_1.default color="info" stats icon>
              <CardIcon_1.default color="info">
                <Accessibility_1.default />
              </CardIcon_1.default>
              <p className={classes.cardCategory}>Followers</p>
              <h3 className={classes.cardTitle}>+245</h3>
            </CardHeader_1.default>
            <CardFooter_1.default stats>
              <div className={classes.stats}>
                <Update_1.default />
                Just Updated
              </div>
            </CardFooter_1.default>
          </Card_1.default>
        </core_1.Grid>
      </GridContainer_1.default>
      <GridContainer_1.default>
        <core_1.Grid xs={12} sm={12} md={4}>
          <Card_1.default chart>
            <CardHeader_1.default color="success">
              
            </CardHeader_1.default>
            <CardBody_1.default>
              <h4 className={classes.cardTitle}>Daily Sales</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward_1.default className={classes.upArrowCardCategory}/> 55%
                </span>{" "}
                increase in today sales.
              </p>
            </CardBody_1.default>
            <CardFooter_1.default chart>
              <div className={classes.stats}>
                <AccessTime_1.default /> updated 4 minutes ago
              </div>
            </CardFooter_1.default>
          </Card_1.default>
        </core_1.Grid>
        <core_1.Grid xs={12} sm={12} md={4}>
          <Card_1.default chart>
            <CardHeader_1.default color="warning">CardHeader
              
            </CardHeader_1.default>
            <CardBody_1.default>
              <h4 className={classes.cardTitle}>Email Subscriptions</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody_1.default>
            <CardFooter_1.default chart>
              <div className={classes.stats}>
                <AccessTime_1.default /> campaign sent 2 days ago
              </div>
            </CardFooter_1.default>
          </Card_1.default>
        </core_1.Grid>
        <core_1.Grid xs={12} sm={12} md={4}>
          <Card_1.default chart>
            <CardHeader_1.default color="danger">
              
            </CardHeader_1.default>
            <CardBody_1.default>
              <h4 className={classes.cardTitle}>Completed Tasks</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody_1.default>
            <CardFooter_1.default chart>
              <div className={classes.stats}>
                <AccessTime_1.default /> campaign sent 2 days ago
              </div>
            </CardFooter_1.default>
          </Card_1.default>
        </core_1.Grid>
      </GridContainer_1.default>
      <GridContainer_1.default>
        <core_1.Grid xs={12} sm={12} md={6}>
          <CustomTabs_1.default title="Tasks:" headerColor="primary" tabs={[
        {
            tabName: "Bugs",
            tabIcon: BugReport_1.default,
            tabContent: (<Tasks_1.default checkedIndexes={[0, 3]} tasksIndexes={[0, 1, 2, 3]} tasks={'bugs'}/>)
        },
        {
            tabName: "Website",
            tabIcon: Code_1.default,
            tabContent: (<Tasks_1.default checkedIndexes={[0]} tasksIndexes={[0, 1]} tasks={'website'}/>)
        },
        {
            tabName: "Server",
            tabIcon: Cloud_1.default,
            tabContent: (<Tasks_1.default checkedIndexes={[1]} tasksIndexes={[0, 1, 2]} tasks={'server'}/>)
        }
    ]}/>
        </core_1.Grid>
        <core_1.Grid xs={12} sm={12} md={6}>
          <Card_1.default>
            <CardHeader_1.default color="warning">
              <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
              <p className={classes.cardCategoryWhite}>
                New employees on 15th September, 2016
              </p>
            </CardHeader_1.default>
            <CardBody_1.default>
              <Table_1.default tableHeaderColor="warning" tableHead={["ID", "Name", "Salary", "Country"]} tableData={[
        ["1", "Dakota Rice", "$36,738", "Niger"],
        ["2", "Minerva Hooper", "$23,789", "Curaçao"],
        ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
        ["4", "Philip Chaney", "$38,735", "Korea, South"]
    ]}/>
            </CardBody_1.default>
          </Card_1.default>
        </core_1.Grid>
      </GridContainer_1.default>
    </div>);
};
exports.default = DashboardComponent;
//# sourceMappingURL=DashboardComponent.jsx.map