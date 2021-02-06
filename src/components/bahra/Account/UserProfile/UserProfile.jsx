"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// @material-ui/core components
const styles_1 = require("@material-ui/core/styles");
const InputLabel_1 = __importDefault(require("@material-ui/core/InputLabel"));
// core components
const GridContainer_1 = __importDefault(require("../../../../styles/common/Grid/GridContainer"));
const CustomInput_1 = __importDefault(require("../../../../styles/common/Input/CustomInput"));
// import Button from "../../../../styles/common/mu/CustomButtons/Button";
const Card_1 = __importDefault(require("../../../../styles/common/Card/Card"));
const CardHeader_1 = __importDefault(require("../../../../styles/common/Card/CardHeader"));
const CardAvatar_1 = __importDefault(require("../../../../styles/common/Card/CardAvatar"));
const CardBody_1 = __importDefault(require("../../../../styles/common/Card/CardBody"));
const CardFooter_1 = __importDefault(require("../../../../styles/common/Card/CardFooter"));
const core_1 = require("@material-ui/core");
const styles = {
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    }
};
const useStyles = styles_1.makeStyles(styles);
function UserProfile() {
    const classes = useStyles();
    const avatar = require("../../../../../public/images/Bahra.png");
    return (<div>
      <GridContainer_1.default>
        <core_1.Grid xs={12} sm={12} md={8}>
          <Card_1.default>
            <CardHeader_1.default color="primary">
              <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
              <p className={classes.cardCategoryWhite}>Complete your profile</p>
            </CardHeader_1.default>
            <CardBody_1.default>
              <GridContainer_1.default>
                <core_1.Grid xs={12} sm={12} md={5}>
                  <CustomInput_1.default labelText="Company (disabled)" id="company-disabled" formControlProps={{
        fullWidth: true
    }} inputProps={{
        disabled: true
    }}/>
                </core_1.Grid>
                <core_1.Grid xs={12} sm={12} md={3}>
                  <CustomInput_1.default labelText="Username" id="username" formControlProps={{
        fullWidth: true
    }}/>
                </core_1.Grid>
                <core_1.Grid xs={12} sm={12} md={4}>
                  <CustomInput_1.default labelText="Email address" id="email-address" formControlProps={{
        fullWidth: true
    }}/>
                </core_1.Grid>
              </GridContainer_1.default>
              <GridContainer_1.default>
                <core_1.Grid xs={12} sm={12} md={6}>
                  <CustomInput_1.default labelText="First Name" id="first-name" formControlProps={{
        fullWidth: true
    }}/>
                </core_1.Grid>
                <core_1.Grid xs={12} sm={12} md={6}>
                  <CustomInput_1.default labelText="Last Name" id="last-name" formControlProps={{
        fullWidth: true
    }}/>
                </core_1.Grid>
              </GridContainer_1.default>
              <GridContainer_1.default>
                <core_1.Grid xs={12} sm={12} md={4}>
                  <CustomInput_1.default labelText="City" id="city" formControlProps={{
        fullWidth: true
    }}/>
                </core_1.Grid>
                <core_1.Grid xs={12} sm={12} md={4}>
                  <CustomInput_1.default labelText="Country" id="country" formControlProps={{
        fullWidth: true
    }}/>
                </core_1.Grid>
                <core_1.Grid xs={12} sm={12} md={4}>
                  <CustomInput_1.default labelText="Postal Code" id="postal-code" formControlProps={{
        fullWidth: true
    }}/>
                </core_1.Grid>
              </GridContainer_1.default>
              <GridContainer_1.default>
                <core_1.Grid xs={12} sm={12} md={12}>
                  <InputLabel_1.default style={{ color: "#AAAAAA" }}>About me</InputLabel_1.default>
                  <CustomInput_1.default labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo." id="about-me" formControlProps={{
        fullWidth: true
    }} inputProps={{
        multiline: true,
        rows: 5
    }}/>
                </core_1.Grid>
              </GridContainer_1.default>
            </CardBody_1.default>
            <CardFooter_1.default>
              <core_1.Button color="primary">Update Profile</core_1.Button>
            </CardFooter_1.default>
          </Card_1.default>
        </core_1.Grid>
        <core_1.Grid xs={12} sm={12} md={4}>
          <Card_1.default profile>
            <CardAvatar_1.default profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..."/>
              </a>
            </CardAvatar_1.default>
            <CardBody_1.default profile>
              <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
              <h4 className={classes.cardTitle}>Alec Thompson</h4>
              <p className={classes.description}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <core_1.Button>
                Follow
              </core_1.Button>
            </CardBody_1.default>
          </Card_1.default>
        </core_1.Grid>
      </GridContainer_1.default>
    </div>);
}
exports.default = UserProfile;
//# sourceMappingURL=UserProfile.jsx.map