"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// @material-ui/core components
const styles_1 = require("@material-ui/core/styles");
// @material-ui/icons
const Close_1 = __importDefault(require("@material-ui/icons/Close"));
const Check_1 = __importDefault(require("@material-ui/icons/Check"));
// core components
const GridContainer_1 = __importDefault(require("@styles/common/Grid/GridContainer"));
const Card_1 = __importDefault(require("../../../styles/common/Card/Card"));
const CardHeader_1 = __importDefault(require("../../../styles/common/Card/CardHeader"));
const CardBody_1 = __importDefault(require("../../../styles/common/Card/CardBody"));
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
    },
    tableUpgradeWrapper: {
        display: "block",
        width: "100%",
        overflowX: "auto",
        WebkitOverflowScrolling: "touch",
        MsOverflowStyle: "-ms-autohiding-scrollbar"
    },
    table: {
        width: "100%",
        maxWidth: "100%",
        marginBottom: "1rem",
        backgroundColor: "transparent",
        borderCollapse: "collapse",
        display: "table",
        borderSpacing: "2px",
        borderColor: "grey",
        "& thdead tr th": {
            fontSize: "1.063rem",
            padding: "12px 8px",
            verticalAlign: "middle",
            fontWeight: "300",
            borderTopWidth: "0",
            borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
            textAlign: "inherit"
        },
        "& tbody tr td": {
            padding: "12px 8px",
            verticalAlign: "middle",
            borderTop: "1px solid rgba(0, 0, 0, 0.06)"
        },
        "& td, & th": {
            display: "table-cell"
        }
    },
    center: {
        textAlign: "center"
    }
};
const useStyles = styles_1.makeStyles(styles);
const UpgradeToArtist = () => {
    const classes = useStyles();
    return (<GridContainer_1.default>
      <core_1.Grid xs={12} sm={12} md={8}>
        <Card_1.default>
          <CardHeader_1.default color="info">
            <h4 className={classes.cardTitleWhite}>
              Material Dashboard Artist React
            </h4>
            <p className={classes.cardCategoryWhite}>
              Are you looking for more components? Please check our Premium
              Version of Material Dashboard Angular.
            </p>
          </CardHeader_1.default>
          <CardBody_1.default>
            <div className={classes.tableUpgradeWrapper}>
              <table className={classes.table}>
                <thead>
                  <tr>
                    <th />
                    <th className={classes.center}>Free</th>
                    <th className={classes.center}>Artist</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Components</td>
                    <td className={classes.center}>30</td>
                    <td className={classes.center}>200</td>
                  </tr>
                  <tr>
                    <td>Plugins</td>
                    <td className={classes.center}>2</td>
                    <td className={classes.center}>10</td>
                  </tr>
                  <tr>
                    <td>Example Pages</td>
                    <td className={classes.center}>7</td>
                    <td className={classes.center}>28</td>
                  </tr>
                  <tr>
                    <td>Login, Register, Pricing, Lock Pages</td>
                    <td className={classes.center}>
                        <Close_1.default />
                    </td>
                    <td className={classes.center}>
                        <Check_1.default />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      ReactTables, ReactVectorMap, ReactSweetAlert, Wizard,
                      Validation, ReactBigCalendar etc...
                    </td>
                    <td className={classes.center}>
                        <Close_1.default />
                    </td>
                    <td className={classes.center}>
                        <Check_1.default />
                    </td>
                  </tr>
                  <tr>
                    <td>Mini Sidebar</td>
                    <td className={classes.center}>
                        <Close_1.default />
                    </td>
                    <td className={classes.center}>
                        <Check_1.default />
                    </td>
                  </tr>
                  <tr>
                    <td>Premium Support</td>
                    <td className={classes.center}>
                        <Close_1.default />
                    </td>
                    <td className={classes.center}>
                        <Check_1.default />
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td className={classes.center}>Free</td>
                    <td className={classes.center}>Just $59</td>
                  </tr>
                  <tr>
                    <td />
                    <td className={classes.center}>
                      <core_1.Button disabled>
                        Current Version
                      </core_1.Button> 
                    </td>
                    <td className={classes.center}>
                      <core_1.Button href="https://www.creative-tim.com/product/material-dashboard-pro-react?ref=mdr-upgrade-live">
                        Upgrade to Artist
                      </core_1.Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardBody_1.default>
        </Card_1.default>
      </core_1.Grid>
    </GridContainer_1.default>);
};
exports.default = UpgradeToArtist;
//# sourceMappingURL=UpgradeToAtist.jsx.map