"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const index_1 = require("./styled/index");
const header_1 = __importDefault(require("./header"));
const core_1 = require("@material-ui/core");
// import classes from '*.module.css';
const react_spring_1 = require("react-spring");
const useStyles = core_1.makeStyles((theme) => core_1.createStyles({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));
const Fade = react_1.default.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited } = props, other = __rest(props, ["in", "children", "onEnter", "onExited"]);
    const style = react_spring_1.useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter();
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited();
            }
        },
    });
    return (<react_spring_1.animated.div ref={ref} style={style} {...other}>
      {children}
    </react_spring_1.animated.div>);
});
const BahraModal = (props) => {
    const { title, isOpen, onRequestClose, children, } = props;
    const classes = useStyles();
    const [open, setOpen] = react_1.default.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (<div>
    <button type="button" onClick={handleOpen}>
    react-spring
    </button>
    <core_1.Modal aria-labelledby="spring-modal-title" aria-describedby="spring-modal-description" className={classes.modal} open={isOpen} onClose={handleClose} closeAfterTransition BackdropComponent={core_1.Backdrop} BackdropProps={{
        timeout: 500,
    }}>
        <Fade in={open}>
          <div className={classes.paper}>
          <header_1.default title={title}/>
          <h2 id="spring-modal-title">Spring modal</h2>
            <p id="spring-modal-description">react-spring animates me.</p>
            <index_1.CloseButton icon={<index_1.StyledCloseIcon />} onPress={onRequestClose}/>
          {children}
          </div>
        </Fade>


    </core_1.Modal>
    </div>);
};
BahraModal.propTypes = {
    title: prop_types_1.default.node,
    isOpen: prop_types_1.default.bool,
    onRequestClose: prop_types_1.default.func,
    children: prop_types_1.default.node,
    hideCloseButton: prop_types_1.default.bool,
    style: prop_types_1.default.object,
};
BahraModal.defaultProps = {
    title: null,
    isOpen: false,
    onRequestClose: () => { },
    children: null,
    hideCloseButton: false,
    style: undefined,
};
exports.default = BahraModal;
//# sourceMappingURL=index.jsx.map