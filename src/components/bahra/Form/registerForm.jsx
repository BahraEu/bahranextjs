"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const formik_1 = require("formik");
const style_1 = require("./style");
const i18n_1 = require("../../../../i18n");
const SignUpForm = props => {
    const t = props.t;
    console.log('error', props.error);
    return (<>
            <style_1.LogInWrapper>
                <formik_1.Form>
                        <style_1.Label htmlFor="email">
                            {t('Email')}
                            <style_1.Input defaultValue="@probablyup" type="email" name="email"/>
                            <style_1.FieldErrorRow name="email" ErrorMessageProp={props.message}/>
                            {props.error && props.message.includes('email')
        ? props.message.split(':').pop()
        : null}
                        </style_1.Label>
                
                        <style_1.Label htmlFor="username">
                            {t('username')}
                            <style_1.Input type="username" name="username"/>
                            <style_1.FieldErrorRow name="username" ErrorMessageProp={props.message}/>
                            {props.error && props.message.includes('username')
        ? props.error.message.split(':').pop()
        : null}
                        </style_1.Label>
                        <style_1.Label htmlFor="password">
                            {t('password')}
                            <style_1.Input type="password" name="password"/>

                            <style_1.FieldErrorRow name="password" ErrorMessageProp={props.message}/>
                            {props.error && props.error.message.includes('password')
        ? props.error.message.split(':').pop()
        : null}
                        </style_1.Label>
                    <style_1.LogInButton type="submit" data-disabled={props.isSubmitting}>
                        {t('Submit')}
                    </style_1.LogInButton>
                </formik_1.Form>
            </style_1.LogInWrapper>
        </>);
};
exports.default = i18n_1.withTranslation('common')(SignUpForm);
//# sourceMappingURL=registerForm.jsx.map