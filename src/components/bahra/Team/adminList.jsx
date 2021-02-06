"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// nodejs library that concatenates classes
// @material-ui/core components
const styles_1 = require("@material-ui/core/styles");
const GridContainer_1 = __importDefault(require("../../../styles/common/Grid/GridContainer"));
const Card_1 = __importDefault(require("../../../styles/common/Card/Card"));
const CardBody_1 = __importDefault(require("../../../styles/common/Card/CardBody"));
const CardFooter_1 = __importDefault(require("../../../styles/common/Card/CardFooter"));
const teamStyle_1 = __importDefault(require("./teamStyle"));
const core_1 = require("@material-ui/core");
const useStyles = styles_1.makeStyles(teamStyle_1.default);
const AdminList = (props) => {
    const admins = props.admins;
    // const navigation = props.navigation;
    console.log('AdminListProps', admins);
    const classes = useStyles(teamStyle_1.default);
    return (<>
 {admins.map(item => (<div className={classes.section}>
      <h2 className={classes.title}>{item.titlle}</h2>
      <div>
        <GridContainer_1.default>
          <core_1.Grid xs={12} sm={12} md={4}>
            <Card_1.default> 
            
              <h4 className={classes.cardTitle}>
                Gigi Hadid
                <br />
                <small className={classes.smallTitle}>Model</small>
              </h4>
              <CardBody_1.default>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CardBody_1.default>
              <CardFooter_1.default className={classes.justifyCenter}>
                <core_1.Button className={classes.margin5}>
                  <i className={classes.socials + " fab fa-twitter"}/>
                </core_1.Button>
                <core_1.Button className={classes.margin5}>
                  <i className={classes.socials + " fab fa-instagram"}/>
                </core_1.Button>
                <core_1.Button className={classes.margin5}>
                  <i className={classes.socials + " fab fa-facebook"}/>
                </core_1.Button>
              </CardFooter_1.default>
            </Card_1.default>
          </core_1.Grid>
          <core_1.Grid xs={12} sm={12} md={4}>
            <Card_1.default plain>
              <core_1.Grid xs={12} sm={12} md={6} className={classes.itemGrid}>
               
               
            
            </core_1.Grid>
              <h4 className={classes.cardTitle}>
                Christian Louboutin
                <br />
                <small className={classes.smallTitle}>Designer</small>
              </h4>
              <CardBody_1.default>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CardBody_1.default>
              <CardFooter_1.default className={classes.justifyCenter}>
                <core_1.Button className={classes.margin5}>
                  <i className={classes.socials + " fab fa-twitter"}/>
                </core_1.Button>
                <core_1.Button className={classes.margin5}>
                  <i className={classes.socials + " fab fa-linkedin"}/>
                </core_1.Button>
              </CardFooter_1.default>
            </Card_1.default>
          </core_1.Grid>
          <core_1.Grid xs={12} sm={12} md={4}>
            <Card_1.default plain>
              
              <h4 className={classes.cardTitle}>
                Kendall Jenner
                <br />
                <small className={classes.smallTitle}>Model</small>
              </h4>
              <CardBody_1.default>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CardBody_1.default>
              <CardFooter_1.default className={classes.justifyCenter}>
                <core_1.Button className={classes.margin5}>
                  <i className={classes.socials + " fab fa-twitter"}/>
                </core_1.Button>
                <core_1.Button className={classes.margin5}>
                  <i className={classes.socials + " fab fa-instagram"}/>
                </core_1.Button>
                <core_1.Button className={classes.margin5}>
                  <i className={classes.socials + " fab fa-facebook"}/>
                </core_1.Button>
              </CardFooter_1.default>
            </Card_1.default>
          </core_1.Grid>
        </GridContainer_1.default>
      </div>
    </div>))}

    </>);
};
exports.default = AdminList;
//# sourceMappingURL=adminList.jsx.map