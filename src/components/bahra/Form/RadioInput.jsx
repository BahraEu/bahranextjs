"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const formik_1 = require("formik");
const react_1 = __importDefault(require("react"));
const RadioInput = ({ input, type, label }) => {
    return (<formik_1.Form>
        <formik_1.Field>
            <div className='ui radio'>
                <input {...input} type={type}/>{' '}
                <label>{label}</label>
            </div>
            </formik_1.Field>
        </formik_1.Form>);
};
exports.default = RadioInput;
//# sourceMappingURL=RadioInput.jsx.map