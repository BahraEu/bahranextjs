"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*eslint-disable*/
const react_1 = __importDefault(require("react"));
// nodejs library to set properties for components
// import PropTypes from "prop-types";
// @material-ui/core components
const styles_1 = require("@material-ui/core/styles");
// @material-ui/icons
const AddAlert_1 = __importDefault(require("@material-ui/icons/AddAlert"));
// core components
const GridContainer_1 = __importDefault(require("../../../../styles/common/Grid/GridContainer"));
const SnackbarContent_1 = __importDefault(require("../../../../styles/common/mu/Snackbar/SnackbarContent"));
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
function Notifications() {
    const classes = useStyles();
    const [tl, setTL] = react_1.default.useState(false);
    const [tc, setTC] = react_1.default.useState(false);
    const [tr, setTR] = react_1.default.useState(false);
    const [bl, setBL] = react_1.default.useState(false);
    const [bc, setBC] = react_1.default.useState(false);
    const [br, setBR] = react_1.default.useState(false);
    react_1.default.useEffect(() => {
        // Specify how to clean up after this effect:
        return function cleanup() {
            // to stop the warning of calling setState of unmounted component
            var id = window.setTimeout(null, 0);
            while (id--) {
                window.clearTimeout(id);
            }
        };
    });
    const showNotification = place => {
        switch (place) {
            case "tl":
                if (!tl) {
                    setTL(true);
                    setTimeout(function () {
                        setTL(false);
                    }, 6000);
                }
                break;
            case "tc":
                if (!tc) {
                    setTC(true);
                    setTimeout(function () {
                        setTC(false);
                    }, 6000);
                }
                break;
            case "tr":
                if (!tr) {
                    setTR(true);
                    setTimeout(function () {
                        setTR(false);
                    }, 6000);
                }
                break;
            case "bl":
                if (!bl) {
                    setBL(true);
                    setTimeout(function () {
                        setBL(false);
                    }, 6000);
                }
                break;
            case "bc":
                if (!bc) {
                    setBC(true);
                    setTimeout(function () {
                        setBC(false);
                    }, 6000);
                }
                break;
            case "br":
                if (!br) {
                    setBR(true);
                    setTimeout(function () {
                        setBR(false);
                    }, 6000);
                }
                break;
            default:
                break;
        }
    };
    return (<Card_1.default>
      <CardHeader_1.default color="primary">
        <h4 className={classes.cardTitleWhite}>Notifications</h4>
        <p className={classes.cardCategoryWhite}>
          Handcrafted by our friends from{" "}
          <a target="_blank" href="https://material-ui-next.com/?ref=creativetime">
            Material UI
          </a>{" "}
          and styled by{" "}
          <a target="_blank" href="https://www.creative-tim.com/?ref=mdr-notifications-page">
            Creative Tim
          </a>
          . Please checkout the{" "}
          <a href="#pablo" target="_blank">
            full documentation
          </a>
          .
        </p>
      </CardHeader_1.default>
      <CardBody_1.default>
        <GridContainer_1.default>
          <core_1.Grid xs={12} sm={12} md={6}>
            <h5>Notifications Style</h5>
            <br />
            <SnackbarContent_1.default message={"This is a plain notification"}/>
            <SnackbarContent_1.default message={"This is a notification with close button."} close/>
            <SnackbarContent_1.default message={"This is a notification with close button and icon."} close icon={AddAlert_1.default}/>
            <SnackbarContent_1.default message={"This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style."} close icon={AddAlert_1.default}/>
          </core_1.Grid>
          <core_1.Grid xs={12} sm={12} md={6}>
            <h5>Notifications States</h5>
            <br />
            <SnackbarContent_1.default message={'INFO - This is a regular notification made with color="info"'} close color="info"/>
            <SnackbarContent_1.default message={'SUCCESS - This is a regular notification made with color="success"'} close color="success"/>
            <SnackbarContent_1.default message={'WARNING - This is a regular notification made with color="warning"'} close color="warning"/>
            <SnackbarContent_1.default message={'DANGER - This is a regular notification made with color="danger"'} close color="danger"/>
            <SnackbarContent_1.default message={'PRIMARY - This is a regular notification made with color="primary"'} close color="primary"/>
          </core_1.Grid>
        </GridContainer_1.default>
        <br />
        <br />
        <GridContainer_1.default>
          <core_1.Grid xs={12} sm={12} md={6} style={{ textAlign: "center" }}>
            <h5>
              Notifications Places
              <br />
              <small>Click to view notifications</small>
            </h5>
          </core_1.Grid>
        </GridContainer_1.default>
        <GridContainer_1.default>
          <core_1.Grid xs={12} sm={12} md={10} lg={8}>
            <GridContainer_1.default>
              <core_1.Grid xs={12} sm={12} md={4}>
                <core_1.Button fullWidth color="primary" onClick={() => showNotification("tl")}>
                  Top Left
                </core_1.Button>
                <core_1.Snackbar color="info" message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer." open={tl} onClose={() => setTL(false)}/>
              </core_1.Grid>
              <core_1.Grid xs={12} sm={12} md={4}>
                <core_1.Button fullWidth color="primary" onClick={() => showNotification("tc")}>
                  Top Center
                </core_1.Button>
                <core_1.Snackbar color="info" message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer." open={tc} onClose={() => setTC(false)}/>
              </core_1.Grid>
              <core_1.Grid xs={12} sm={12} md={4}>
                <core_1.Button fullWidth color="primary" onClick={() => showNotification("tr")}>
                  Top Right
                </core_1.Button>
                <core_1.Snackbar color="info" message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer." open={tr} onClose={() => setTR(false)}/>
              </core_1.Grid>
            </GridContainer_1.default>
          </core_1.Grid>
        </GridContainer_1.default>
        <GridContainer_1.default>
          <core_1.Grid xs={12} sm={12} md={10} lg={8}>
            <GridContainer_1.default>
              <core_1.Grid xs={12} sm={12} md={4}>
                <core_1.Button fullWidth color="primary" onClick={() => showNotification("bl")}>
                  Bottom Left
                </core_1.Button>
                <core_1.Snackbar color="info" message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer." open={bl} onClose={() => setBL(false)}/>
              </core_1.Grid>
              <core_1.Grid xs={12} sm={12} md={4}>
                <core_1.Button fullWidth color="primary" onClick={() => showNotification("bc")}>
                  Bottom Center
                </core_1.Button>
                <core_1.Snackbar color="info" message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer." open={bc} onClose={() => setBC(false)}/>
              </core_1.Grid>
              <core_1.Grid xs={12} sm={12} md={4}>
                <core_1.Button fullWidth color="primary" onClick={() => showNotification("br")}>
                  Bottom Right
                </core_1.Button>
                  place="br"
                  color="info"
                  icon={AddAlert_1.default}
                  message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer."
                  open={br}
                  onClose={() => setBR(false)}
              </core_1.Grid>
            </GridContainer_1.default>
          </core_1.Grid>
        </GridContainer_1.default>
      </CardBody_1.default>
    </Card_1.default>);
}
exports.default = Notifications;
//# sourceMappingURL=Notifications.jsx.map