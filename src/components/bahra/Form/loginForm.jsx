"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formik_1 = require("formik");
const style_1 = require("./style");
const i18n_1 = require("../../../../i18n");
const LoginForm = props => {
    const t = props.t;
    debugger;
    console.error(props.message, props);
    return (<>
           
                    <formik_1.Form>
                    <style_1.LogInStyle>
                            <style_1.Label htmlFor="username">
                                {t('username')}
                                <style_1.Input type="username" name="username"/>
                                <style_1.FieldErrorRow name="username" ErrorMessageProp={props.message}/>
                                {props.message && props.message.includes('username')
        ? props.message.split(':').pop()
        : null}
                            </style_1.Label>
                     
                            <style_1.Label htmlFor="password">
                                {t('password')}
                                <style_1.Input type="password" name="password"/>
                                <style_1.FieldErrorRow name="password" ErrorMessageProp={props.message}/>
                                {props.message && props.message.includes('password')
        ? props.message.split(':').pop()
        : null}
                            </style_1.Label>
                        <style_1.LogInButton type="submit" disabled={props.isSubmitting}>
                            {t('Submit')}
                        </style_1.LogInButton>               
                         </style_1.LogInStyle>

                    </formik_1.Form>
               
        </>);
};
exports.default = i18n_1.withTranslation('common')(LoginForm);
//# sourceMappingURL=loginForm.jsx.map