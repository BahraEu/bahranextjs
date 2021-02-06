"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
// @material-ui/core components
const styles_1 = require("@material-ui/core/styles");
const Table_1 = __importDefault(require("@material-ui/core/Table"));
const TableHead_1 = __importDefault(require("@material-ui/core/TableHead"));
const TableRow_1 = __importDefault(require("@material-ui/core/TableRow"));
const TableBody_1 = __importDefault(require("@material-ui/core/TableBody"));
const TableCell_1 = __importDefault(require("@material-ui/core/TableCell"));
// core components
const tableStyle_1 = __importDefault(require("./tableStyle"));
const useStyles = styles_1.makeStyles(tableStyle_1.default);
function CustomTable(props) {
    const classes = useStyles();
    const { tableHead, tableData, tableHeaderColor } = props;
    return (<div className={classes.tableResponsive}>
      <Table_1.default className={classes.table}>
        {tableHead !== undefined ? (<TableHead_1.default className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow_1.default className={classes.tableHeadRow}>
              {tableHead.map((prop, key) => {
        return (<TableCell_1.default className={classes.tableCell + " " + classes.tableHeadCell} key={key}>
                    {prop}
                  </TableCell_1.default>);
    })}
            </TableRow_1.default>
          </TableHead_1.default>) : null}
        <TableBody_1.default>
          {tableData.map((prop, key) => {
        return (<TableRow_1.default key={key} className={classes.tableBodyRow}>
                {prop.map((prop, key) => {
            return (<TableCell_1.default className={classes.tableCell} key={key}>
                      {prop}
                    </TableCell_1.default>);
        })}
              </TableRow_1.default>);
    })}
        </TableBody_1.default>
      </Table_1.default>
    </div>);
}
exports.default = CustomTable;
CustomTable.defaultProps = {
    tableHeaderColor: "gray"
};
CustomTable.propTypes = {
    tableHeaderColor: prop_types_1.default.oneOf([
        "warning",
        "primary",
        "danger",
        "success",
        "info",
        "rose",
        "gray"
    ]),
    tableHead: prop_types_1.default.arrayOf(prop_types_1.default.string),
    tableData: prop_types_1.default.arrayOf(prop_types_1.default.arrayOf(prop_types_1.default.string))
};
//# sourceMappingURL=Table.jsx.map