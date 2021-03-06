"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const style_1 = require("./style");
const formik_1 = require("formik");
const react_1 = __importDefault(require("react"));
// import { useSpring, config } from 'react-spring';
const i18n_1 = require("../../../../i18n");
const AccountForm = (props) => {
    const initialValues = { firstName: props.user.firstName };
    //   const opacityProps = useSpring({
    //     config: config.molasses,
    //     delay: 600,
    //     from: { opacity: 0 },
    //     to: { opacity: 1 },
    // });
    return (<formik_1.Formik initialValues={initialValues} onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
    }} render={() => (<formik_1.Form>
                                <formik_1.Field name="firstName" render={({ field, meta }) => (<div>
                                            <style_1.Input type="text" {...field} placeholder="search"/>
                                            {meta.touched && meta.error && meta.error}
                                        </div>)}/>
                            </formik_1.Form>)}/>);
};
exports.default = i18n_1.withTranslation('common')(AccountForm);
//# sourceMappingURL=accountForm.jsx.map