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
const React = __importStar(require("react"));
const routes_1 = require("../../../services/routes/routes");
const style_1 = require("./style");
const i18n_1 = require("../../../../i18n");
const react_spring_1 = require("react-spring");
const theme_1 = __importDefault(require("../../../styles/theme"));
const menuItem_1 = __importDefault(require("./menuItem"));
const utilty_1 = require("../../../utilty");
const DropDownContent = theme_1.default(react_spring_1.animated.div) `
  display: none;
  position: absolute;
  background-color:${props => utilty_1.hexa(props.theme.bg.inset3, 1)}!important;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;
const itemsToShow = {
    instructor: {
        showText: "instructor",
        callBackFunction: () => {
            console.log("a");
        }
    },
    student: {
        showText: "student",
        callBackFunction: () => {
            console.log("a");
        }
    }
};
const showThisRole = "instructor";
const Menu = (props) => {
    const node = React.useRef();
    const [currentItemDisplay, setcurrentItemDisplay] = React.useState(Object.keys(itemsToShow).length > 0 ? showThisRole : "");
    let rolesDisplay = [];
    let updateNumber = 0;
    Object.keys(itemsToShow).map(item => {
        if (itemsToShow[item]["url"]) {
            // exists URL
            rolesDisplay.push(<p key={"op" + updateNumber++} onClick={() => (window.location.href = itemsToShow[item]["url"])}>
            {itemsToShow[item]["showText"]}
          </p>);
        }
        else {
            // no url, exec callBack
            rolesDisplay.push(<p key={"op" + updateNumber++} onClick={() => {
                setcurrentItemDisplay(item);
                itemsToShow[item]["callBackFunction"](item);
            }}>
            {itemsToShow[item]["showText"]}{currentItemDisplay}
          </p>);
        }
    });
    const navRef = React.useRef();
    const liRef = React.useRef();
    const [show, setShow] = React.useState(false);
    const fullMenuAnimation = react_spring_1.useSpring({
        ref: navRef,
        from: { opacity: 0, transform: `translateY(-200%)` },
        transform: show ? `translateY(0)` : `translateY(-200%)`,
        opacity: show ? 1 : 0,
        display: "flex",
        flexDirection: "column",
        config: { friction: 24, tension: 180 }
    });
    React.useEffect(() => {
        document.addEventListener("click", handleClick, false);
        return () => {
            document.removeEventListener("click", handleClick, false);
        };
    });
    const handleClick = e => {
        if (node.current.contains(e.target)) {
            // inside click
            setShow(!show);
        }
        else {
            setShow(false);
        }
    };
    const itemTransitions = react_spring_1.useTransition(show ? Object.keys(itemsToShow) : [], item => itemsToShow[item]["showText"], {
        ref: liRef,
        unique: true,
        trail: 400 / Object.keys(itemsToShow).length,
        from: {
            opacity: 0,
            transform: "translateY(40px)",
            margin: "0px 0px 0px 0px",
            padding: "0px"
        },
        enter: { opacity: 1, transform: "translateY(0)" },
        leave: { opacity: 0, transform: "translateY(40px)" }
    });
    react_spring_1.useChain(show ? [navRef, liRef] : [liRef, navRef], [0, 0.2]);
    const { t } = props;
    return (<div ref={node}>

                <DropDownContent style={Object.keys(itemsToShow).length > 1 ? fullMenuAnimation : null}>
                                {itemTransitions.map(({ item, key, props }) => (<react_spring_1.animated.div style={props} key={key} onClick={() => {
        if (itemsToShow[item]["url"]) {
            window.location.href = itemsToShow[item]["url"];
        }
        else {
            setcurrentItemDisplay(item);
            itemsToShow[item]["callBackFunction"](item);
        }
    }}>
                                    <menuItem_1.default content={itemsToShow[item]["showText"]}/>
                     
                                      <style_1.Label>
                                          <routes_1.Link prefetch href="/">
                                              <a>{t('welcome')}</a>
                                          </routes_1.Link>
                                      </style_1.Label>

                                      

                                      
                                    </react_spring_1.animated.div>))}
                    </DropDownContent>
                </div>);
};
exports.default = i18n_1.withTranslation('common')(Menu);
//# sourceMappingURL=Menu.jsx.map