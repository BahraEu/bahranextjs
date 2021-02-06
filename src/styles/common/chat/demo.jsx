"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const clsx_1 = __importDefault(require("clsx"));
const Grid_1 = __importDefault(require("@material-ui/core/Grid"));
const Avatar_1 = __importDefault(require("@material-ui/core/Avatar"));
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
const withStyles_1 = __importDefault(require("@material-ui/core/styles/withStyles"));
const styles_1 = __importDefault(require("./styles"));
const ChatMsg = props => {
    const { classes, avatar, messages, side, GridContainerProps, GridItemProps, AvatarProps, getTypographyProps } = props;
    withStyles_1.default(styles_1.default);
    const attachClass = index => {
        if (index === 0) {
            return classes[`${side}First`];
        }
        if (index === messages.length - 1) {
            return classes[`${side}Last`];
        }
        return '';
    };
    return (<Grid_1.default container spacing={2} justify={side === 'right' ? 'flex-end' : 'flex-start'} {...GridContainerProps}>
      {side === 'left' && (<Grid_1.default item {...GridItemProps}>
          <Avatar_1.default src={avatar} {...AvatarProps} className={clsx_1.default(classes.avatar, AvatarProps.className)}/>
        </Grid_1.default>)}
      <Grid_1.default item xs={8}>
        {messages.map((msg, i) => {
        const TypographyProps = getTypographyProps(msg, i, props);
        return (
        // eslint-disable-next-line react/no-array-index-key
        <div key={msg.id || i} className={classes[`${side}Row`]}>
              <Typography_1.default align={'left'} {...TypographyProps} className={clsx_1.default(classes.msg, classes[side], attachClass(i), TypographyProps.className)}>
                {msg}
              </Typography_1.default>
            </div>);
    })}
      </Grid_1.default>
    </Grid_1.default>);
};
ChatMsg.propTypes = {
    avatar: prop_types_1.default.string,
    messages: prop_types_1.default.arrayOf(prop_types_1.default.string),
    side: prop_types_1.default.oneOf(['left', 'right']),
    GridContainerProps: prop_types_1.default.shape({}),
    GridItemProps: prop_types_1.default.shape({}),
    AvatarProps: prop_types_1.default.shape({}),
    getTypographyProps: prop_types_1.default.func,
};
ChatMsg.defaultProps = {
    avatar: '',
    messages: [],
    side: 'left',
    GridContainerProps: {},
    GridItemProps: {},
    AvatarProps: {},
    getTypographyProps: () => ({}),
};
exports.default = withStyles_1.default(styles_1.default)(ChatMsg);
//# sourceMappingURL=demo.jsx.map