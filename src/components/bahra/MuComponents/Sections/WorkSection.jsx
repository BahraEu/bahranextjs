"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// @material-ui/core components
const styles_1 = require("@material-ui/core/styles");
// @material-ui/icons
// core components
const GridContainer_1 = __importDefault(require("../../../../styles/common/Grid/GridContainer"));
const CustomInput_1 = __importDefault(require("../../../../styles/common/Input/CustomInput"));
const workStyle_1 = __importDefault(require("./sectionStyle/workStyle"));
const core_1 = require("@material-ui/core");
const useStyles = styles_1.makeStyles(workStyle_1.default);
function WorkSection() {
    const classes = useStyles();
    return (<div className={classes.section}>
      <GridContainer_1.default>
        <core_1.Grid xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Work with us</h2>
          <h4 className={classes.description}>
            Divide details about your product or agency work into parts. Write a
            few lines about each one and contact us about any further
            collaboration. We will responde get back to you in a couple of
            hours.
          </h4>
          <form>
            <GridContainer_1.default>
              <core_1.Grid xs={12} sm={12} md={6}>
                <CustomInput_1.default labelText="Your Name" id="name" formControlProps={{
        fullWidth: true
    }}/>
              </core_1.Grid>
              <core_1.Grid xs={12} sm={12} md={6}>
                <CustomInput_1.default labelText="Your Email" id="email" formControlProps={{
        fullWidth: true
    }}/>
              </core_1.Grid>
              <CustomInput_1.default labelText="Your Message" id="message" formControlProps={{
        fullWidth: true,
        className: classes.textArea
    }} inputProps={{
        multiline: true,
        rows: 5
    }}/>
              <core_1.Grid xs={12} sm={12} md={4}>
                <core_1.Button color="primary">Send Message</core_1.Button>
              </core_1.Grid>
            </GridContainer_1.default>
          </form>
        </core_1.Grid>
      </GridContainer_1.default>
    </div>);
}
exports.default = WorkSection;
//# sourceMappingURL=WorkSection.jsx.map