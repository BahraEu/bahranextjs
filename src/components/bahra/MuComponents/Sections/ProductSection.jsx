"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// @material-ui/core components
const styles_1 = require("@material-ui/core/styles");
// @material-ui/icons
const Chat_1 = __importDefault(require("@material-ui/icons/Chat"));
const VerifiedUser_1 = __importDefault(require("@material-ui/icons/VerifiedUser"));
const Fingerprint_1 = __importDefault(require("@material-ui/icons/Fingerprint"));
// core components
const GridContainer_1 = __importDefault(require("../../../../styles/common/Grid/GridContainer"));
const InfoArea_1 = __importDefault(require("../../../../styles/common/mu/InfoArea/InfoArea"));
const productStyle_1 = __importDefault(require("./sectionStyle/productStyle"));
const core_1 = require("@material-ui/core");
const useStyles = styles_1.makeStyles(productStyle_1.default);
function ProductSection() {
    const classes = useStyles();
    return (<div className={classes.section}>
      <GridContainer_1.default>
        <core_1.Grid xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk product</h2>
          <h5 className={classes.description}>
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he wouldn
            {"'"}t scroll to get here. Add a button if you want the user to see
            more.
          </h5>
        </core_1.Grid>
      </GridContainer_1.default>
      <div>
        <GridContainer_1.default>
          <core_1.Grid xs={12} sm={12} md={4}>
            <InfoArea_1.default title="Free Chat" description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough." icon={Chat_1.default} iconColor="info" vertical/>
          </core_1.Grid>
          <core_1.Grid xs={12} sm={12} md={4}>
            <InfoArea_1.default title="Verified Users" description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough." icon={VerifiedUser_1.default} iconColor="success" vertical/>
          </core_1.Grid>
          <core_1.Grid xs={12} sm={12} md={4}>
            <InfoArea_1.default title="Fingerprint" description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough." icon={Fingerprint_1.default} iconColor="danger" vertical/>
          </core_1.Grid>
        </GridContainer_1.default>
      </div>
    </div>);
}
exports.default = ProductSection;
//# sourceMappingURL=ProductSection.jsx.map