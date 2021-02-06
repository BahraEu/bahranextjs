"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// @material-ui/core components
const styles_1 = require("@material-ui/core/styles");
// core components
const GridContainer_1 = __importDefault(require("../../../../styles/common/Grid/GridContainer"));
const Table_1 = __importDefault(require("../../../../styles/common/mu/Table/Table"));
const Card_1 = __importDefault(require("../../../../styles/common/Card/Card"));
const CardHeader_1 = __importDefault(require("../../../../styles/common/Card/CardHeader"));
const CardBody_1 = __importDefault(require("../../../../styles/common/Card/CardBody"));
const core_1 = require("@material-ui/core");
const styles = {
    cardCategoryWhite: {
        "&,& a,& a:hover,& a:focus": {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0"
        },
        "& a,& a:hover,& a:focus": {
            color: "#FFFFFF"
        }
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1"
        }
    }
};
const useStyles = styles_1.makeStyles(styles);
function TableList() {
    const classes = useStyles();
    return (<GridContainer_1.default>
      <core_1.Grid xs={12} sm={12} md={12}>
        <Card_1.default>
          <CardHeader_1.default color="primary">
            <h4 className={classes.cardTitleWhite}>Simple Table</h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader_1.default>
          <CardBody_1.default>
            <Table_1.default tableHeaderColor="primary" tableHead={["Name", "Country", "City", "Salary"]} tableData={[
        ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
        ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
        ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
        ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
        ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
        ["Mason Porter", "Chile", "Gloucester", "$78,615"]
    ]}/>
          </CardBody_1.default>
        </Card_1.default>
      </core_1.Grid>
      <core_1.Grid xs={12} sm={12} md={12}>
        <Card_1.default plain>
          <CardHeader_1.default plain color="primary">
            <h4 className={classes.cardTitleWhite}>
              Table on Plain Background
            </h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader_1.default>
          <CardBody_1.default>
            <Table_1.default tableHeaderColor="primary" tableHead={["ID", "Name", "Country", "City", "Salary"]} tableData={[
        ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
        ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
        ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
        [
            "4",
            "Philip Chaney",
            "$38,735",
            "Korea, South",
            "Overland Park"
        ],
        [
            "5",
            "Doris Greene",
            "$63,542",
            "Malawi",
            "Feldkirchen in Kärnten"
        ],
        ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"]
    ]}/>
          </CardBody_1.default>
        </Card_1.default>
      </core_1.Grid>
    </GridContainer_1.default>);
}
exports.default = TableList;
//# sourceMappingURL=TableList.jsx.map