"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const formik_1 = require("formik");
const react_1 = __importDefault(require("react"));
const style_1 = require("./style");
const DateInput = ({ meta: { touched, error }, }) => {
    return (<formik_1.Form>
    <formik_1.Field error={touched && !!error}>
      
      {touched && error && (<style_1.Label>
          {error}
        </style_1.Label>)} 
      </formik_1.Field>
    </formik_1.Form>);
};
exports.default = DateInput;
//# sourceMappingURL=DateInput.jsx.map