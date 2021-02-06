"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const classnames_1 = __importDefault(require("classnames"));
// @material-ui/core components
const styles_1 = require("@material-ui/core/styles");
const Checkbox_1 = __importDefault(require("@material-ui/core/Checkbox"));
const Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
const IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
const Table_1 = __importDefault(require("@material-ui/core/Table"));
const TableRow_1 = __importDefault(require("@material-ui/core/TableRow"));
const TableBody_1 = __importDefault(require("@material-ui/core/TableBody"));
const TableCell_1 = __importDefault(require("@material-ui/core/TableCell"));
// @material-ui/icons
const Edit_1 = __importDefault(require("@material-ui/icons/Edit"));
const Close_1 = __importDefault(require("@material-ui/icons/Close"));
const Check_1 = __importDefault(require("@material-ui/icons/Check"));
// core components
const tasksStyle_1 = __importDefault(require("./tasksStyle"));
const useStyles = styles_1.makeStyles(tasksStyle_1.default);
function Tasks(props) {
    const classes = useStyles();
    const [checked, setChecked] = react_1.default.useState([...props.checkedIndexes]);
    const handleToggle = value => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        if (currentIndex === -1) {
            newChecked.push(value);
        }
        else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };
    const { tasksIndexes, tasks, rtlActive } = props;
    const tableCellClasses = classnames_1.default(classes.tableCell, {
        [classes.tableCellRTL]: rtlActive
    });
    return (<Table_1.default className={classes.table}>
      <TableBody_1.default>
        {tasksIndexes.map(value => (<TableRow_1.default key={value} className={classes.tableRow}>
            <TableCell_1.default className={tableCellClasses}>
              <Checkbox_1.default checked={checked.indexOf(value) !== -1} tabIndex={-1} onClick={() => handleToggle(value)} checkedIcon={<Check_1.default className={classes.checkedIcon}/>} icon={<Check_1.default className={classes.uncheckedIcon}/>} classes={{
        checked: classes.checked,
        root: classes.root
    }}/>
            </TableCell_1.default>
            <TableCell_1.default className={tableCellClasses}>{tasks[value]}</TableCell_1.default>
            <TableCell_1.default className={classes.tableActions}>
              <Tooltip_1.default id="tooltip-top" title="Edit Task" placement="top" classes={{ tooltip: classes.tooltip }}>
                <IconButton_1.default aria-label="Edit" className={classes.tableActionButton}>
                  <Edit_1.default className={classes.tableActionButtonIcon + " " + classes.edit}/>
                </IconButton_1.default>
              </Tooltip_1.default>
              <Tooltip_1.default id="tooltip-top-start" title="Remove" placement="top" classes={{ tooltip: classes.tooltip }}>
                <IconButton_1.default aria-label="Close" className={classes.tableActionButton}>
                  <Close_1.default className={classes.tableActionButtonIcon + " " + classes.close}/>
                </IconButton_1.default>
              </Tooltip_1.default>
            </TableCell_1.default>
          </TableRow_1.default>))}
      </TableBody_1.default>
    </Table_1.default>);
}
exports.default = Tasks;
Tasks.propTypes = {
    tasksIndexes: prop_types_1.default.arrayOf(prop_types_1.default.number),
    tasks: prop_types_1.default.string,
    rtlActive: prop_types_1.default.bool,
    checkedIndexes: prop_types_1.default.array
};
//# sourceMappingURL=Tasks.jsx.map