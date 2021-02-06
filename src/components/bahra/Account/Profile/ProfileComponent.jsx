"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// nodejs library that concatenates classes
// import classNames from "classnames";
// @material-ui/core components
const styles_1 = require("@material-ui/core/styles");
// @material-ui/icons
const Camera_1 = __importDefault(require("@material-ui/icons/Camera"));
const Palette_1 = __importDefault(require("@material-ui/icons/Palette"));
const Favorite_1 = __importDefault(require("@material-ui/icons/Favorite"));
// core components
const GridContainer_1 = require("../../../../styles/common/Grid/GridContainer");
const styles_2 = __importStar(require("./styles"));
const NavPills_1 = __importDefault(require("../../../../styles/common/mu/NavPills/NavPills"));
const core_1 = require("@material-ui/core");
const Typography_1 = require("../../../../styles/Typography");
const react_spring_1 = require("react-spring");
const utilty_1 = require("../../../../utilty");
const index_1 = require("../../../../styles/common/Avatar/styled/index");
const useStyles = styles_1.makeStyles(styles_2.default);
const ProfileComponent = (props) => {
    const classes = useStyles();
    const user = props.user;
    const [springProps, setSpringProps] = react_spring_1.useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
    const calc = (x, y) => !utilty_1.isServer ? [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1] : null;
    const trans = (x, y, s) => !utilty_1.isServer ? `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})` : null;
    // const imageClasses = classNames(
    //   classes.imgRaised,
    //   classes.imgRoundedCircle,
    //   classes.imgFluid
    // );
    // const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    const Imag = "https://www.bahra.eu/admin/wp-content/uploads/2021/01/santa-fe-2367043_1920.jpg";
    return (<div>
        <styles_2.ProfilePageStyleMain>
          <div>
            <styles_2.ProfilePageStylecontainer>
              
              <GridContainer_1.StyledContainer>
                  <styles_2.ProfileSection className={classes.profile} xl={12} lg={12} xs={12} sm={12} md={12}>
                        <react_spring_1.animated.div onMouseMove={({ clientX: x, clientY: y }) => setSpringProps({ xys: calc(x, y) })} onMouseLeave={() => setSpringProps({ xys: [0, 0, 1] })} style={{ transform: springProps.xys.interpolate(trans) }}> 
                                   <index_1.StyledAvatar src={Imag} alt="..."/>
                        </react_spring_1.animated.div>
                    
                    <div>
                      
                      <styles_2.ProfilePageStyleTitle>{user.name}</styles_2.ProfilePageStyleTitle>
                      <Typography_1.H6>{user.roles.name}</Typography_1.H6>
                      <core_1.Button>
                        <styles_2.ProfilePageStyleSocials />"fab fa-twitter"
                      </core_1.Button>
                      <core_1.Button>
                        <styles_2.ProfilePageStyleSocials />
                      </core_1.Button>
                      <core_1.Button>
                        <styles_2.ProfilePageStyleSocials />
                      </core_1.Button>
                    </div>
                  </styles_2.ProfileSection>
              </GridContainer_1.StyledContainer>
  
  
  
              <styles_2.ProfilePageDescription>
               {user.description}
              </styles_2.ProfilePageDescription>
  
              
              <div style={{ justifyContent: 'center' }}>
                <core_1.Grid xs={12} sm={12} md={8}>
                  <NavPills_1.default alignCenter color="#000" tabs={[
        {
            tabButton: "Studio",
            tabIcon: Camera_1.default,
            tabContent: (<div style={{ justifyContent: 'center' }}>
                            <core_1.Grid xs={12} sm={12} md={4}>
                              <styles_2.ProfilePageStyleImage alt="..." src={Imag}/>
                              <styles_2.ProfilePageStyleImage alt="..." src={Imag}/>
                            </core_1.Grid>
                            <core_1.Grid xs={12} sm={12} md={4}>
                              <styles_2.ProfilePageStyleImage alt="..." src={Imag}/>
                              <styles_2.ProfilePageStyleImage alt="..." src={Imag}/>
                            </core_1.Grid>
                          </div>)
        },
        {
            tabButton: "Work",
            tabIcon: Palette_1.default,
            tabContent: (<div style={{ justifyContent: 'center' }}>
                            <core_1.Grid xs={12} sm={12} md={4}>
                              <styles_2.ProfilePageStyleImage alt="..." src={Imag}/>
                              <styles_2.ProfilePageStyleImage alt="..." src={Imag}/>
                              <styles_2.ProfilePageStyleImage alt="..." src={Imag}/>
                            </core_1.Grid>
                            <core_1.Grid xs={12} sm={12} md={4}>
                              <styles_2.ProfilePageStyleImage alt="..." src={Imag}/>
                              <styles_2.ProfilePageStyleImage alt="..." src={Imag}/>
                            </core_1.Grid>
                          </div>)
        },
        {
            tabButton: "Favorite",
            tabIcon: Favorite_1.default,
            tabContent: (<div>
                            <core_1.Grid xs={12} sm={12} md={4}>
                              <styles_2.ProfilePageStyleImage alt="..." src={Imag}/>
                              <styles_2.ProfilePageStyleImage alt="..." src={Imag}/>
                            </core_1.Grid>
                            <core_1.Grid xs={12} sm={12} md={4}>
                              <styles_2.ProfilePageStyleImage alt="..." src={Imag}/>
                              <styles_2.ProfilePageStyleImage alt="..." src={Imag}/>
                              <styles_2.ProfilePageStyleImage alt="..." src={Imag}/>
                            </core_1.Grid>
                          </div>)
        }
    ]}/>
                </core_1.Grid>
              </div>
            </styles_2.ProfilePageStylecontainer>
          </div>
        </styles_2.ProfilePageStyleMain>
      </div>);
};
exports.default = ProfileComponent;
//# sourceMappingURL=ProfileComponent.jsx.map